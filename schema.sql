DROP DATABASE IF EXISTS `yelp`;

CREATE DATABASE IF NOT EXISTS `yelp`;

USE `yelp`;

CREATE TABLE `users` (
  `_id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `username` VARCHAR(30),
  UNIQUE KEY (_id, username)
);

CREATE TABLE `restaurants` (
  `_id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `rest_name` VARCHAR(50),
  `days_open` JSON NOT NULL,
  `open_time` TIME NOT NULL,
  `close_time` TIME NOT NULL,
  `price_range` ENUM('Under $10', '$11-30', '$31-60', 'Above $61') NOT NULL,
  `health_score` INT NOT NULL,
  `max_party` INT NOT NULL
);

CREATE TABLE `reservations` (
  `_id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `rest_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `day` DATE NOT NULL,
  `party_size` INT NOT NULL,
  `start_time` TIME NOT NULL,
  `end_time` TIME NOT NULL,
  FOREIGN KEY (rest_id)
    REFERENCES restaurants(_id),
  FOREIGN KEY (user_id)
    REFERENCES users(_id)
);





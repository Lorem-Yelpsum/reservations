DROP DATABASE IF EXISTS `yelp`;

CREATE DATABASE IF NOT EXISTS `yelp`;

USE `yelp`;

CREATE TABLE `users` (
  `_id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `username` VARCHAR(15),
  UNIQUE KEY (username)
);

CREATE TABLE `restaurants` (
  `_id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `rest_name` VARCHAR(50),
  `street_number` VARCHAR(4) NOT NULL,
  `street_name` VARCHAR(50) NOT NULL,
  `street_type` VARCHAR(5) NOT NULL,
  `city` VARCHAR(20) NOT NULL,
  `state` VARCHAR(2) NOT NULL,
  `zip` VARCHAR(5) NOT NULL,
  `days_open` JSON NOT NULL,
  `opening_time` TIME NOT NULL,
  `closing_time` TIME NOT NULL,
  `table_count` INT NOT NULL
);

CREATE TABLE tables (
  `_id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `rest_id` INT NOT NULL,
  `min_seating` INT NOT NULL,
  `max_seating` INT NOT NULL,
  `availability` JSON NOT NULL,
  FOREIGN KEY (rest_id)
    REFERENCES restaurants(_id)
);

CREATE TABLE timeslots (
  `_id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `rest_id` INT NOT NULL,
  `table_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `date` DATE NOT NULL,
  `start_time` TIME NOT NULL,
  `end_time` TIME NOT NULL,
  `party_size` INT NOT NULL,
  FOREIGN KEY (rest_id)
    REFERENCES restaurants(_id),
  FOREIGN KEY (table_id)
    REFERENCES tables(_id),
  FOREIGN KEY (user_id)
    REFERENCES users(_id)
);



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

INSERT INTO users (username) VALUES ('aftersalt');
INSERT INTO users (username) VALUES ('wavydavy');
INSERT INTO users (username) VALUES ('esey');
INSERT INTO users (username) VALUES ('tyler');
INSERT INTO users (username) VALUES ('collin');

INSERT INTO restaurants (rest_name, street_number, street_name, street_type, city, state, zip, days_open, opening_time, closing_time, table_count) 
VALUES 
('restaurant1', '1111', 'streetname1', 'st.', 'SF', 'CA', 95132, 
JSON_OBJECT('Sunday', false, 'Monday', true, 'Tuesday', true, 'Wednesday', true, 'Thursday', true, 'Friday', true, 'Saturday', false), 
'09:00:00', '20:00:00', 5);

INSERT INTO restaurants (rest_name, street_number, street_name, street_type, city, state, zip, days_open, opening_time, closing_time, table_count) 
VALUES 
('restaurant2', '2222', 'streetname2', 'dr.', 'SF', 'CA', 95133, 
JSON_OBJECT('Sunday', false, 'Monday', true, 'Tuesday', true, 'Wednesday', true, 'Thursday', true, 'Friday', true, 'Saturday', false), 
'09:00:00', '20:00:00', 5);


INSERT INTO tables (rest_id, min_seating, max_seating, availability) 
VALUES (1, 2, 5, JSON_ARRAY(JSON_ARRAY('09:00:00', '11:00:00'), JSON_ARRAY('18:00:00','20:00:00')));

INSERT INTO tables (rest_id, min_seating, max_seating, availability) 
VALUES (2, 2, 5, JSON_ARRAY(JSON_ARRAY('11:00:00', '13:00:00'), JSON_ARRAY('15:00:00','17:00:00'), JSON_ARRAY('18:00:00','20:00:00')));

const faker = require('faker');
const db = require('./index.js');

// USERS
for (let i = 0; i < 100; i++) {
  let query = `INSERT INTO users (username) VALUES (?);`;
  let randomUsername = faker.internet.userName();
  let params = [randomUsername];
  db.connection.query(query, params);
}

//RESTAURANTS
for (let i = 0; i < 100; i++) {
  const range = ['Under $10', '$11-30', '$31-60', 'Above $61'];
  let query = `INSERT INTO restaurants 
  (rest_name, days_open, opening_time, closing_time, price_range, health_score) 
  VALUES 
  (?, 
    JSON_OBJECT(0, ${faker.random.boolean()}, 1, true, 2, true, 3, true, 4, true, 5, true, 6, ${faker.random.boolean()}), 
    ?, ?, ?, ?);`;
  let rest_name = faker.company.companyName();
  let opening_time = `08:00:00`;
  let closing_time = `24:00:00`;
  let price_range = range[Math.floor(Math.random() * range.length)];
  let health_score = faker.random.number({min: 60, max: 100});
  let params = [rest_name, opening_time, closing_time, price_range, health_score];
  db.connection.query(query, params);
}

//RESERVATIONS
for (let i = 0; i < 100; i++) {
  let randomDates = [faker.date.recent()];
  let query = `INSERT INTO reservations 
  (rest_id, user_id, day, party_size, start_time, end_time) 
  VALUES (?, ?, ?, ?, ?, ?);`;
  let rest_id = faker.random.number({min: 1, max: 100});
  let user_id = faker.random.number({min: 1, max: 100});
  let day = randomDates[Math.floor(Math.random() * randomDates.length)];
  let party_size = faker.random.number({min: 1, max: 10});
  let randomHour = faker.random.number({min: 8, max: 22});
  let start_time = `${randomHour}:00:00`;
  let end_time = `${randomHour + 2}:00:00`;
  let params = [rest_id, user_id, day, party_size, start_time, end_time];
  db.connection.query(query, params);
}

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
  const opening_time_range = ['07:00:00', '12:00:00', '14:00:00'];
  const closing_time_range = ['17:00:00', '21:00:00', '21:30:00', '22:00:00', '22:30:00', '23:00:00', '23:30:00', '24:00:00'];
  let query = `INSERT INTO restaurants 
  (rest_name, days_open, open_time, close_time, price_range, health_score, max_party) 
  VALUES 
  (?, 
    JSON_OBJECT(0, ${faker.random.boolean()}, 1, true, 2, true, 3, true, 4, true, 5, true, 6, ${faker.random.boolean()}), 
    ?, ?, ?, ?, ?);`;
  let rest_name = faker.company.companyName();
  let open_time = opening_time_range[Math.floor(Math.random() * opening_time_range.length)];
  let close_time = closing_time_range[Math.floor(Math.random() * closing_time_range.length)];
  let price_range = range[Math.floor(Math.random() * range.length)];
  let health_score = faker.random.number({min: 60, max: 100});
  let max_party = faker.random.number({min: 8, max: 12});
  let params = [rest_name, open_time, close_time, price_range, health_score, max_party];
  db.connection.query(query, params);
}

//RESERVATIONS
for (let i = 0; i < 100; i++) {
  let randomDates = [faker.date.recent()];
  let query = `INSERT INTO reservations 
  (rest_id, user_id, date, party_size, reservation_time) 
  VALUES (?, ?, ?, ?, ?);`;
  let rest_id = faker.random.number({min: 1, max: 100});
  let user_id = faker.random.number({min: 1, max: 100});
  let date = randomDates[Math.floor(Math.random() * randomDates.length)];
  let party_size = faker.random.number({min: 1, max: 10});
  let randomHour = faker.random.number({min: 8, max: 22});
  let reservation_time = `${randomHour}:00:00`;
  let params = [rest_id, user_id, date, party_size, reservation_time];
  db.connection.query(query, params);
}

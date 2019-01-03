const mysql = require('mysql');
//CONFIG STRUCTURE
// module.exports = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

const getRestaurantInfo = (req, res) => {
  let queryStr = `SELECT * FROM restaurants WHERE restaurants._id=?`;
  connection.query(queryStr, [req.params.restaurantId], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(results);
    }
  })
}

const getRestaurantReservations = (req, res) => {
  let queryStr = `SELECT _id, date, party_size, reservation_time FROM reservations WHERE reservations.rest_id=?`;
  connection.query(queryStr, [req.params.restaurantId], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};

const createReservation = (req, res) => {
  let {restaurantId, user_id, date, party_size, reservation_time} = req.body;
  let queryStr = `INSERT INTO reservations (rest_id, user_id, date, party_size, reservation_time) VALUES (?, ?, ?, ?, ?)`;
  let params = [restaurantId, user_id, date, party_size, reservation_time];
  connection.query(queryStr, params, (err, results) => {
    if (err) {
      res.status(422).send(err);
    } else {
      res.status(201).json(results);
    }
  });
}

module.exports = {
  connection,
  getRestaurantInfo,
  getRestaurantReservations,
  createReservation
}

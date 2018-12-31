const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

const getRestaurantInfo = (req, res) => {
  let queryStr = `SELECT * FROM restaurants WHERE restaurants._id=?`;
  connection.query(queryStr, [req.params.rest_id], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(results);
    }
  })
}

const getAllReserv = (req, res) => {
  let queryStr = `SELECT _id, day, party_size, start_time, end_time FROM reservations WHERE reservations.rest_id=?`;
  connection.query(queryStr, [req.params.rest_id], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};

const getSingleReserv = (req, res) => {
  let queryStr = `SELECT _id, day, party_size, start_time, end_time FROM reservations WHERE reservations.rest_id=? AND reservations._id=?`;
  connection.query(queryStr, [req.params.rest_id, req.params.reserv_id], (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};

const createReservation = (req, res) => {
  let {rest_id, user_id, date, party_size, reservation_time} = req.body;
  let queryStr = `INSERT INTO reservations (rest_id, user_id, date, party_size, reservation_time) VALUES (?, ?, ?, ?, ?)`;
  let params = [rest_id, user_id, date, party_size, reservation_time];
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
  getAllReserv,
  getSingleReserv,
  createReservation
}
const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

const getAllReserv = (req, res) => {
  let queryStr = `SELECT _id, day, party_size, start_time, end_time FROM reservations WHERE reservations.rest_id=?`;
  connection.query(queryStr, [req.params.rest_id], (err, results) => {
    if (err) {
      res.status(404).send(err);
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

const postNewReserv = (req, res) => {
  res.status(201).end('Post Request Received');
}

module.exports = {
  connection,
  getAllReserv,
  getSingleReserv,
  postNewReserv
}
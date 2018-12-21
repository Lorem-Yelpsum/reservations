const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const db = mysql.createConnection(mysqlConfig);

db.connect();

const getAllReservations = (req, res) => {
  db.query(`SELECT * FROM timeslots`, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};

module.exports = {
  getAllReservations
};
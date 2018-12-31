const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db/index.js');
const template = require('./views/template.js');
const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist/')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/restaurant/:rest_id', (req, res) => {
    const rest_id = req.params.rest_id;
    res.status(200).send(template(rest_id));
});

app.get('/restaurantInfo/:rest_id', db.getRestaurantInfo);

app.get('/reservations/:rest_id/', db.getAllReserv);

app.get('/reservations/:rest_id/:reserv_id', db.getSingleReserv);

app.post('/reservations/:rest_id/', db.createReservation);

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server listening to PORT ${PORT} because of the internet`);
});
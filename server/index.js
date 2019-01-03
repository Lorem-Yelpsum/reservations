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

app.get('/restaurant/:restaurantId', (req, res) => {
    const restaurantId = req.params.restaurantId;
    res.status(200).send(template(restaurantId));
});

app.get('/restaurantInfo/:restaurantId', db.getRestaurantInfo);

app.get('/reservations/:restaurantId/', db.getRestaurantReservations);

app.post('/reservations/:restaurantId/', db.createReservation);

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server listening to PORT ${PORT} because of the internet`);
});
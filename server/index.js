const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db/index.js');
const app = express();


app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist/')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//to grab that rest_id we make a new route
// added     this to differentiate it from other similar routes (you can change it)
//             \/
app.get('/restaurant/:rest_id/, (req, res) => {
        const rest_id = req.params.rest_id;
          res.status(200)
          res.send(template(rest_id)); /*send the html instead of serving it staticaly*/
        })

app.get('/reservations/:rest_id/', db.getAllReserv);

app.get('/reservations/:rest_id/:reserv_id', db.getSingleReserv);

app.post('/reservations/:rest_id/', db.postNewReserv);

//this will be in a separate file to keep things clean
const template = (rest_id) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Lorem-yelpsum</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div id="reviews">this should disappear</div>
    <script>window.rest_id= ${rest_id}</script> /* THIS IS ALL YOU CHANGE HERE here we set the restaurant Id to window object*/
    <script src="/bundle.js"></script> /* this is your bundle(it might be differently named in your case */
</body>
</html>
`

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server listening to PORT ${PORT} because of the internet`);
});






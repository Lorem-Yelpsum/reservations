const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist/')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));










const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server listening to PORT ${PORT} because of the internet`);
});
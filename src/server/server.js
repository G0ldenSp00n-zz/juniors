const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flavorController = require('./controller/flavorController.js');

// configs
require('dotenv').config();
app.use(bodyParser.json());

// connect to database
mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) console.log(err);
  else console.log('Connected to database...');
})

app.get('/flavors', flavorController.getFlavors);
app.post('/flavors', flavorController.addFlavor);
app.patch('/likes', flavorController.addLike);


app.use(express.static(__dirname + '/../../dist'));

// create server
app.listen(3000, () => {
  console.log("Listening on port 3000...");
})
const mongoose = require('mongoose');

const flavorSchema = new mongoose.Schema({
  flavor: {type: String, required: true},
  likes: {type: Number, required: true}
})

module.exports = mongoose.model('flavor', flavorSchema);
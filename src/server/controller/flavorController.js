const flavorSchema = require('../schema/flavorSchema.js');

module.exports = {
  getFlavors: (req, res) => {
    flavorSchema.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.sendStatus(404);
    })
  },

  addFlavor: (req, res) => {
    const newFlavor = req.body;
    newFlavor.likes = 1;

    flavorSchema.create(newFlavor)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.sendStatus(404);
    })
  },

  addLike: (req, res) => {
    flavorSchema.findOneAndUpdate(req.body, {$inc: {likes:1}}, {upsert: true, new: true})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.sendStatus(404);
    })
  }
}
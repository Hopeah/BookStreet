const mongoose = require('mongoose')

const DocSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: false,
  },
  cloudinaryId: {
    type: String,
    require: false,
  },
  author: {
    type: String,
    required: false,
  },
  genre: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  date: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('Doc', DocSchema)
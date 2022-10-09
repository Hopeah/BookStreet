const mongoose = require('mongoose')

const DocSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
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
    required: true,
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
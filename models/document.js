const mongoose = require('mongoose')

const DocSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
    //Need to add cloudinaryID
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
  date: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('Doc', DocSchema)
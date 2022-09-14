const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  documents: {
    type: Array,
    required: true,
  },
    //Need to add cloudinaryID
  description: {
    type: String,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('List', ListSchema)
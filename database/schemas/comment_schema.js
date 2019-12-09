const mongoose = require('mongoose') // Requiring mongoose
const Schema = mongoose.Schema // Pull the Schema off of mongoose

// Notice the date now. It is a function
// The array of comments is a piece of Mongoose magic

const CommentSchema = new Schema({
  created: {
    type: Date,
    required: true,
    default: Date.now()
  },
  body: {
    type: String,
    required: true
  }
})

module.exports = CommentSchema // dont forget to export

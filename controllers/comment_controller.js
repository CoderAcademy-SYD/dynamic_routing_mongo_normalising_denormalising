// NB There is no Model for comments!!
const BookModel = require('./../database/models/book_model') // Require in the BookModel

// Creating a comment NB Async flag
async function create (req, res) {
  let { id } = req.params // Destructure the BookId off params
  let { body } = req.body // Destructure the body off of the req.body
  let book = await BookModel.findById(id) // Retrieve the book out of the DB
  book.comments.push({ body }) // Push the body of the comment onto the array of comments
  await book.save() // Await the process to be complete NB pay attention to .save()
  res.redirect(`/books/${book._id}`) // Redirect to the book show page
}

module.exports = {
  create
}

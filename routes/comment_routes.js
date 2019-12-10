const express = require('express') // Requires in express
const router = express.Router() // Use the express router
const CommentController = require('../controllers/comment_controller') // Bring in the CommentController

router.post('/:id', CommentController.create)

module.exports = router

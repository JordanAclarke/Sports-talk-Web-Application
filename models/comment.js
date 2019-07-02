/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */


/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const CommentSchema = new mongoose.Schema({
 name: {
   type: String,
  //  required: true
 },
 response: {
   type: String,
  //  required: true
 },
 postId: {
  type: String,
  required: true
 } 
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const CommentCollection = mongoose.model('Comment', CommentSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllComments () {
  return CommentCollection.find()
}
function getComment(commentId) {
  return CommentCollection.findById(commentId)
}
function getCommentByPostId(postId) {
  return CommentCollection.find({postId})
}
function addComment(commentObject) {
  return CommentCollection.create(commentObject)
}
function updateComment(postId, commentObject) {
  return CommentCollection.findByIdAndUpdate(postId, commentObject)
}
function deleteComment(postId) {
  return CommentCollection.findByIdAndDelete(postId)
}
  
// function getComment(commentId) {
//   return CommentCollection.findById(commentId)
// }


/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllComments,
  getComment,
  getCommentByPostId,
  addComment,
  updateComment,
  deleteComment
}


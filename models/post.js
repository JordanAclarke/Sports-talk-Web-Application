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
const PostSchema = new mongoose.Schema({
 category: {
  type: String,
  required: true
 },
 post: {
   type: String,
   required: true
 },
 created_at: {
   type: Date,
   required: true,
   default: Date.now
 },
 status: String,
 imgLink: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const PostCollection = mongoose.model('Post', PostSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllPosts() {
  return PostCollection.find()
}
function addPost(newPost) {
  return PostCollection.create(newPost)
}
function getPost(postId) {
  return PostCollection.findById(postId)
}
function updatePost(postId, updatedPost) {
  return PostCollection.findByIdAndUpdate(postId, updatedPost)
}
function deletePost(postId) {
  return PostCollection.findByIdAndDelete(postId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllPosts,
  addPost,
  getPost,
  updatePost,
  deletePost
}

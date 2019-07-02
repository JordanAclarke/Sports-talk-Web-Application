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
const ResponseSchema = new mongoose.Schema({
 name: {
   type: String,
 },
 response: {
   type: String,
  //  required: true
 },
 commentId: {
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
const ResponseCollection = mongoose.model('Response', ResponseSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllResponses () {
  return ResponseCollection.find()
}
function getResponse(responseId) {
  return ResponseCollection.findById(ResponseId)
}
function getResponseByCommentId(commentId) {
  return ResponseCollection.find({commentId})
}
function addResponse(responseObject) {
  return ResponseCollection.create(responseObject)
}

function deleteResponse(commentId) {
  return ResponseCollection.findByIdAndDelete(commentId)
}
  

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllResponses,
  getResponse,
  getResponseByCommentId,
  addResponse,
  deleteResponse
}


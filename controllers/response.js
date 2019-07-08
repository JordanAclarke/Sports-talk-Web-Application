/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */

const responseApi = require('../models/response.js')
const commentApi = require('../models/comment.js')
const postApi = require('../models/post.js')


/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const responseRouter = express.Router({mergeParams: true})

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 

responseRouter.get('/', (req, res) => {
  responseApi.getAllResponses()
  .then((responses) => {
    res.send(responses)
  })
})
responseRouter.get('/new', (req, res) => {
  const commentId = req.params.commentId;
  const postId = req.params.postId;
    res.render('responses/newResponseForm', {commentId, postId})
  })

responseRouter.get('/:responseId', (req, res) => {
  const commentId = req.params.commentId;
  const postId = req.params.postId;
  // const responseId = req.params.responseId
  responseApi.getResponse(req.params.responseId)
  .then((response) => {
    res.render('responses/singleResponse', {response, commentId, postId})
  })
  .catch((err) => {
    console.log('This is the' + err)
  })
})


responseRouter.post('/', (req, res) => {
  console.log("this is a check "+ req.params.postId)
  req.body.postId = req.params.postId
  req.body.commentId= req.params.commentId
  responseApi.addResponse(req.body) 
    .then(() => {
      // console.log(req.body)
      res.redirect(`/posts/${req.params.postId}`)
    })
    .catch((err) => {
      res.send(err)
    })
})
// `/${req.params.commentId}



responseRouter.delete('/:responseId', (req, res) => {
  console.log('im trying')
  responseApi.deleteResponse(req.params.responseId)
  .then(() => {
    res.redirect('/posts')
  })
})

// /${req.params.commentId}`



// commentRouter.get('/edit', (req, res) => {
//   commentApi.getComment(req.params.commentId)
//   .then((comment) => {
//     res.render('comments/editCommentForm', {comment})
//     console.log(comment)
//   })
//   .catch((err) => {
//     res.send(err)
//   })
// })

// commentRouter.put('/', (req, res) => {
//   req.body.postId = req.params.postId
//   commentApi.updateComment(req.params.postId, req.body)
//   .then(()=> {
//     res.redirect('/posts')
//   })
// })


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  responseRouter
}

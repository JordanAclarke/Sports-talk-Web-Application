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
// const userApi = require('../models/user.js')
const postApi = require('../models/post.js')
const commentApi= require('../models/comment.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const postRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
postRouter.get('/', (req, res) => {
  postApi.getAllPosts()
  .then((posts) => {
    res.render('posts/posts', {posts})
  })
  .catch((err) => {
    res.send(err)
  })
})

//ended here
postRouter.get('/new', (req, res) => {
  console.log('in the new request handler')
  res.render('posts/newPostForm')
})

//Entered here
// postRouter.get('/:postId', (req, res) => {
//   postApi.getPost(req.params.postId)
//   .then((post) => {
//     res.render('posts/singlePost', {post})
//   })
// })



postRouter.post('/', (req, res) => {
  //entered here
  // req.body.userId = req.params.userId
  //entered here
  postApi.addPost(req.body)
  .then(() => {
    res.redirect('/posts')
  })
  .catch((err) => {
    res.send(err)
  })
})

//ENTERED HERE
////////

postRouter.get('/:postId/edit', (req, res) => {
  postApi.getPost(req.params.postId)
  .then((post) => {
    res.render('posts/editPostForm', {post})
  })
  .catch((err) => {
    res.send(err)
  })
})

postRouter.get('/:postId', (req, res) => {
  console.log('This is being called')
  postApi.getPost(req.params.postId)
  .then((post) => {
    commentApi.getCommentByPostId(post._id)
    .then((comments) => {
      console.log('comment',comments)
    res.render('posts/singlePost', {post, comments})
    })
  })
})
  



postRouter.put('/:postId', (req, res) => {
  postApi.updatePost(req.params.postId, req.body)
  .then(() => {
    res.redirect('/posts')
  })
  .catch((err) => {
    res.send(err)
  })
})

postRouter.delete('/:postId', (req, res) => {
  postApi.deletePost(req.params.postId)
  .then(() => {
    res.redirect('/posts')
  })
  .catch((err) => {
    res.send(err)
  })
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  postRouter
}

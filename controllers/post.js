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
const postApi = require('../models/post.js')

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
postRouter.post('/', (req, res) => {
  postApi.addPost(req.body)
  .then(() => {
    res.redirect('/posts')
  })
  .catch((err) => {
    res.send(err)
  })
})

postRouter.get('/new', (req, res) => {
  res.render('posts/newPostForm')
})

postRouter.get('/:postId', (req, res) => {
  postApi.getPost(req.params.postId)
  .then((post) => {
    res.render('posts/singlePost', {post})
  })
  .catch((err) => {
    res.send(err)
  })
})

postRouter.put('/:postId', (req, res) => {
  postApi.updatePost(req.params.postId, req.body)
  .then(() => {
    res.send('Post Has Been Updated!')
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

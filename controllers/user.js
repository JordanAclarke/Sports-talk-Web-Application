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
const userApi = require('../models/user.js')
const postApi = require('../models/post.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const userRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
userRouter.get('/', (req, res) => {
  userApi.getAllUsers()
  .then((users) => {
    res.render("users/users", {users})
  })
  .catch((err) => {
    res.send(err)
  })
})

userRouter.get('/new', (req, res) => {
  res.render('users/newUserForm')
})

userRouter.post('/', (req, res) => {
  userApi.createUser(req.body)
  .then(() => {
    res.redirect('/users')
  })
})

////
// userRouter.get('/:userId', (req, res) => {
//   userApi.getUser(req.params.userId)
//   .then((user) => {
//     postApi.getPostByUserId(req.params.userId)
//     .then((post) => {
//       res.render('users/singleUser', {user, post})
//     })
//   })
// })

///




userRouter.get('/:userId', (req, res) => {
  userApi.getUser(req.params.userId)
  .then(user => {
    postApi.getPost(req.params.userId)
    .then(posts => {
      res.render('users/singleUser', {user, posts})
    })
  })
})


userRouter.get('/:userId/edit', (req, res) => {
  userApi.updateUser(req.params.userId)
  .then((user) => {
    res.render('users/editUserForm', {user})
  })
})


//NEW INSERTIONS
// userRouter.get('/:userId', (req, res) => {
//   userApi.getUser(req.params.userId)
//   .then((user) => {
//     userApi.getPostByUserId(user._id)
//     .then((post) => {
//       console.log('post',post)
//     res.render('users/singleUser', {user, post})
//     })
//   })
// })

//END OF NEW INSERTION



userRouter.put('/:userId', (req, res) => {
  userApi.updateUser(req.params.userId, req.body)
  .then(() => {
    res.redirect('/users')
  })
  .catch((err) => {
    res.send(err)
  })
})

userRouter.delete('/:userId', (req, res) => {
  userApi.deleteUser(req.params.userId)
  .then(() => {
    res.redirect('/users')
  })
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  userRouter
}

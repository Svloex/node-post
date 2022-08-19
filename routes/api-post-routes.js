const express = require("express")
const { getPost, deletePost, editPost, getPosts, addPost } = require('../controllers/api-post-controller')

const Post = require('../models/post')
const createPath = require('../helpers/create-path')

const router = express.Router()
    //Get All Posts
router.get('/api/posts', getPosts)
    //Add New Post
router.post('/api/post', addPost)
    //Get Post by ID
router.post('/api/post/:id', getPost)
    // Delete Post by ID
router.delete('/api/post/:id', deletePost)
    //Update Post by ID 
router.put('/api/post/:id', editPost)


module.exports = router
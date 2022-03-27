const express = require("express")
const { getPost, deletePost, getEditPost, editPost, getPosts, addPost, getAddPost } = require('../controllers/post-controller')

const Post = require('../models/post')
const createPath = require('../helpers/create-path')

const router = express.Router()
    //     //Get All Posts
    // router.get('/api/posts', getPosts)
    //     //Add New Post
    // router.post('/api/post', addPost)
    //     //Get Post by ID
    // router.post('/api/post/:id', getPost)
    //     // Delete Post by ID
    // router.delete('/api/post/:id', deletePost)
    // //Update Post by ID 
    // router.put('/api/post/:id',editPost)

router.get('/posts/:id', getPost
    //(req, res) => {
    //const title = "Post"
    // const post = {
    //     id: 1,
    //     text: "просто текст просто текст просто текст просто текст просто текст просто текст",
    //     title: "Post title",
    //     date: "07.03.2022",
    //     author: "Svloex"
    // }
    // res.render(createPath("post"), { title, post })
    //console.log("я тут был")
    // Post
    //     .findById(req.params.id)
    //     .then(post => {
    //         console.log("я тут был")
    //         return res.render(createPath("post"), { post, title })
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         res.render(createPath("error"), { title: "Error" })
    //     })

    //}
)
router.delete('/posts/:id', deletePost
    // (req, res) => {
    //     Post
    //         .findByIdAndDelete(req.params.id)
    //         .then(result => {
    //             res.sendStatus(200)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             res.render(createPath("error"), { title: "Error" })
    //         })
    // }
)
router.get('/edit/:id', getEditPost
    //  (req, res) => {
    //     const title = "Edit Post"
    //     Post
    //         .findById(req.params.id)
    //         .then(post => {
    //             res.render(createPath("edit-post"), { post, title: "Edit" })
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             res.render(createPath("error"), { title: "Error" })
    //         })
    // }
)
router.put('/edit/:id', editPost
    //  (req, res) => {
    //     const { title, author, text } = req.body
    //     const { id } = req.params
    //     Post
    //         .findByIdAndUpdate(id, { title, author, text })
    //         .then(result => {
    //             res.redirect(`/posts/${id}`)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             res.render(createPath("error"), { title: "Error" })
    //         })
    // }
)
router.get('/posts', getPosts
    //  (req, res) => {
    //     const title = "Posts"
    //         //         // const posts = [{
    //         //         //     id: 1,
    //         //         //     text: "просто текст просто текст просто текст просто текст просто текст просто текст",
    //         //         //     title: "Post title",
    //         //         //     date: "07.03.2022",
    //         //         //     author: "Svloex"
    //         //         // }]
    //         //         // res.render(createPath("posts"), { title, posts })
    //     Post
    //         .find()
    //         .sort({ createdAt: -1 })
    //         .then(posts => res.render(createPath("posts"), { posts, title }))
    //         .catch(err => {
    //             console.log(err)
    //             res.render(createPath("error"), { title: "Error" })
    //         })
    // }
)
router.post('/add-post', addPost
    //  (req, res) => {
    //     const { title, author, text } = req.body
    //     const post = new Post({ title, author, text })
    //     post
    //         .save()
    //         .then(result => res.redirect('/posts'))
    //         .catch(err => {
    //             console.log(err)
    //             res.render(createPath("error"), { title: "Error" })
    //         })
    //         // const post = {
    //         //     id: new Date(),
    //         //     date: new Date().toLocaleDateString(),
    //         //     title,
    //         //     author,
    //         //     text
    //         // }
    //         //res.render(createPath("post"), { post, title })
    // }
)
router.get('/add-post', getAddPost
    //  (req, res) => {
    //     const title = "Add post"
    //     res.render(createPath("add-post"), { title })
    // }
)
module.exports = router
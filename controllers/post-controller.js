const Post = require('../models/post')
const createPath = require('../helpers/create-path')
const hundleError = (res, err) => {
    console.log(err)
    res.render(createPath("error"), { title: "Error" })
}
const getPost = (req, res) => {
    const title = "Post"
    Post
        .findById(req.params.id)
        .then(post => {
            console.log("я тут был")
            return res.render(createPath("post"), { post, title })
        })
        .catch(err => hundleError(res, err))
}
const deletePost = (req, res) => {
    Post
        .findByIdAndDelete(req.params.id)
        .then(result => {
            res.sendStatus(200)
        })
        .catch(err => hundleError(res, err))
}
const getEditPost = (req, res) => {
    const title = "Edit Post"
    Post
        .findById(req.params.id)
        .then(post => {
            res.render(createPath("edit-post"), { post, title: "Edit" })
        })
        .catch(err => hundleError(res, err))
}
const editPost = (req, res) => {
    const { title, author, text } = req.body
    const { id } = req.params

    Post
        .findByIdAndUpdate(id, { title, author, text })
        .then(result => {
            console.log("вот это" + req.params)
            res.redirect(`/posts/${id}`)
        })
        .catch(err => hundleError(res, err))

}
const getPosts = (req, res) => {
    const title = "Posts"
        //         // const posts = [{
        //         //     id: 1,
        //         //     text: "просто текст просто текст просто текст просто текст просто текст просто текст",
        //         //     title: "Post title",
        //         //     date: "07.03.2022",
        //         //     author: "Svloex"
        //         // }]
        //         // res.render(createPath("posts"), { title, posts })
    Post
        .find()
        .sort({ createdAt: -1 })
        .then(posts => {
            res.render(createPath("posts"), { posts, title })
        })
        .catch(err => hundleError(res, err))


}
const addPost = (req, res) => {

    const { title, author, text } = req.body
    const post = new Post({ title, author, text })
    post
        .save()
        .then(result => res.redirect('/posts'))
        .catch(err => hundleError(res, err))
        // const post = {
        //     id: new Date(),
        //     date: new Date().toLocaleDateString(),
        //     title,
        //     author,
        //     text
        // }
        //res.render(createPath("post"), { post, title })

}
const getAddPost = (req, res) => {
    const title = "Add post"
    res.render(createPath("add-post"), { title })

}
module.exports = {
    getPost,
    deletePost,
    getEditPost,
    editPost,
    getPosts,
    addPost,
    getAddPost
}
const auth = require("../middleware/auth.middleware")
const Post = require("../models/Post")
const Comments = require("../models/Comments")
const Like = require("../models/Like")
const User = require("../models/User")
const express = require("express")
const router = express.Router({ mergeParams: true })

router.post("/createPost", auth, async (req, res) => {
    try {
        await Post.create({
            ...req.body,
        })

        const { author } = req.body

        const posts = await Post.find({ author: author }).sort({ createdAt: -1 })
        await User.findByIdAndUpdate({ _id: author }, { posts: posts.length })

        res.send({
            posts,
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

router.post("/createComment", auth, async (req, res) => {
    try {
        const { author, postId } = req.body

        const comment = await Comments.create({
            ...req.body,
        })

        await Post.findByIdAndUpdate({ _id: postId }, { $push: { comments: comment } })

        const comments = await Comments.find({ postId })
        res.send({
            comments: comments,
        })

        // const posts = await Post.find({ author: author });
        // res.send({
        //     posts,
        // });
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

router.post("/getCommentsForPost", auth, async (req, res) => {
    try {
        const { postId } = req.body

        const comments = await Comments.find({ postId })

        res.send({
            comments: comments,
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

router.post("/getUserPosts", auth, async (req, res) => {
    try {
        const posts = await Post.find({ author: req.body.author }).sort({ createdAt: -1 })

        res.send({
            posts,
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

router.post("/getNews", auth, async (req, res) => {
    try {
        const { usersList } = req.body

        let posts = await Promise.all(
            usersList.map((id) => Post.find({ author: id }).sort({ createdAt: -1 }))
        )
        posts = posts.flat(1)

        res.send({
            posts,
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

router.post("/toggleLike", auth, async (req, res) => {
    try {
        const { author, postId } = req.body

        if (author && postId) {
            // let post = await Post.findOne({ _id: postId })
            const like = await Like.findOne({ author, postId })

            if (like) {
                await Like.deleteOne({ author, postId })
                const likes = await Like.find({ postId })
                await Post.findByIdAndUpdate({ _id: postId }, { likes: likes.length })

                // const userLikes = await Like.find({ author })
                // await User.findByIdAndUpdate({ _id: author }, { likes: userLikes })

                res.send({
                    message: "лайк удален",
                    likes: likes.length,
                })
            } else {
                await Like.create({ author, postId })
                const likes = await Like.find({ postId })
                await Post.findByIdAndUpdate({ _id: postId }, { likes: likes.length })

                // const userLikes = await Like.find({ author })
                // await User.findByIdAndUpdate({ _id: author }, { likes: userLikes })

                res.send({
                    message: "лайк создан",
                    likes: likes.length,
                })
            }
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

router.post("/isLiked", auth, async (req, res) => {
    try {
        const { author, postId } = req.body

        if (author && postId) {
            const like = await Like.findOne({ author, postId })
            if (like) {
                res.send({
                    liked: true,
                })
            } else {
                res.send({
                    liked: false,
                })
            }
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

router.get("/getAllPost", auth, async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 })

        res.status(200).send(posts)
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

module.exports = router

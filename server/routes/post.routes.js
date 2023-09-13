const auth = require("../middleware/auth.middleware")
const Post = require("../models/Post")
const User = require("../models/User")
const express = require("express")
const router = express.Router({ mergeParams: true })

router.post("/createPost", auth, async (req, res) => {
    try {
        await Post.create({
            ...req.body,
        })

        const posts = await Post.find({ author: req.body.author })
        // user.posts.push(newPost)
        // const updatedUser = await User.findByIdAndUpdate(userId, user, {
        //     new: true,
        // })
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

router.post("/getUserPosts", auth, async (req, res) => {
    try {
        const posts = await Post.find({ author: req.body.author })

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

router.get("/getAllPost", auth, async (req, res) => {
    try {
        const posts = await Post.find()

        res.status(200).send(posts)
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

module.exports = router

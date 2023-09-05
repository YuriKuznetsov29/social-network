const auth = require("../middleware/auth.middleware");
const Post = require("../models/Post");
const express = require("express");
const router = express.Router({ mergeParams: true });

router.post("/createPost", auth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
        });

        res.status(200).send({
            ...newPost,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

router.get("/getAllPost", auth, async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).send(posts);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

module.exports = router;

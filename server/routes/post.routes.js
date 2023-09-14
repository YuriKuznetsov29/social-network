const auth = require("../middleware/auth.middleware");
const Post = require("../models/Post");
const Comments = require("../models/Comments");
const Like = require("../models/Like");
const express = require("express");
const router = express.Router({ mergeParams: true });

router.post("/createPost", auth, async (req, res) => {
    try {
        await Post.create({
            ...req.body,
        });

        const posts = await Post.find({ author: req.body.author });

        res.send({
            posts,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

router.post("/createComment", auth, async (req, res) => {
    try {
        const { author, postId } = req.body;

        const comment = await Comments.create({
            ...req.body,
        });

        console.log(comment);

        await Post.findByIdAndUpdate({ _id: postId }, { $push: { comments: comment } });

        const posts = await Post.find({ author: author });
        res.send({
            posts,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

router.post("/getCommentsForPost", auth, async (req, res) => {
    try {
        const { postId } = req.body;

        const comments = await Comments.find({ postId });
        console.log(comments, postId);
        res.send({
            comments: comments,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

router.post("/getUserPosts", auth, async (req, res) => {
    try {
        const posts = await Post.find({ author: req.body.author });

        res.send({
            posts,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

router.post("/toggleLike", auth, async (req, res) => {
    try {
        const { author, postId } = req.body;

        if (author && postId) {
            let post = await Post.findOne({ _id: postId });
            const like = await Like.findOne({ author, postId });

            if (like) {
                await Like.deleteOne({ author, postId });
                const likes = await Like.find({ postId });
                post.likes = likes.length;
                await Post.findByIdAndUpdate({ _id: postId }, post);

                res.send({
                    message: "лайк удален",
                });
            } else {
                await Like.create({ author, postId });
                const likes = await Like.find({ postId });
                post.likes = likes.length; // исправить
                await Post.findByIdAndUpdate({ _id: postId }, post);

                res.send({
                    message: "лайк создан",
                });
            }
        }
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

const express = require("express")
const User = require("../models/User")
const router = express.Router({
    mergeParams: true,
})
const auth = require("../middleware/auth.middleware")
const config = require("config")
const fs = require("fs")
const Uuid = require("uuid")
const { check, validationResult } = require("express-validator")
const path = require("path")

router.post("/uploadAvatar", [
    auth,
    check().custom((_, { req }) => {
        const extension = path.extname(req.files.file.name).toLowerCase()
        return [".jpg", ".jpeg", ".png", ".jfif"].some((ext) => ext === extension)
    }),
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: {
                        message: "Выберете изображение c расширением .jpg, .jpeg, .png, .jfif",
                        code: 400,
                    },
                })
            }

            const file = req.files.file
            const user = await User.findById(req.res.user._id)
            const extension = path.extname(req.files.file.name).toLowerCase()
            const avatarName = Uuid.v4() + extension
            file.mv(config.get("staticPath") + "\\" + avatarName)
            user.avatarPath = avatarName
            await user.save()
            res.status(200).send({
                user: {
                    userId: user._id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    gender: user.gender,
                    friends: user.friends,
                    posts: user.posts,
                    requests: user.requests,
                    birthDay: user.birthDay,
                    avatarPath: user.avatarPath,
                },
            })
        } catch (e) {
            console.log(e)
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже",
            })
        }
    },
])

router.post("/uploadImage", [
    auth,
    check().custom((_, { req }) => {
        const extension = path.extname(req.files.file.name).toLowerCase()
        return [".jpg", ".jpeg", ".png", ".jfif"].some((ext) => ext === extension)
    }),
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: {
                        message: "Выберете изображение c расширением .jpg, .jpeg, .png, .jfif",
                        code: 400,
                    },
                })
            }

            const file = req.files.file
            const extension = path.extname(req.files.file.name).toLowerCase()
            const imagePath = Uuid.v4() + extension
            file.mv(config.get("staticPath") + "\\" + imagePath)

            res.status(200).send({
                imagePath,
            })
        } catch (e) {
            console.log(e)
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже",
            })
        }
    },
])

router.delete("/removeAvatar", auth, async (req, res) => {
    try {
        const user = await User.findById(req.res.user._id)
        fs.unlinkSync(config.get("staticPath") + "\\" + user.avatarPath)
        user.avatarPath = null
        await user.save()
        console.log(user)
        res.status(200).send({
            user: {
                userId: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                gender: user.gender,
                friends: user.friends,
                posts: user.posts,
                requests: user.requests,
                birthDay: user.birthDay,
                avatarPath: user.avatarPath,
            },
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

module.exports = router

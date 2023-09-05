const express = require("express")
const User = require("../models/User")
const auth = require("../middleware/auth.middleware")
const UserService = require("../services/user.service")
const router = express.Router({ mergeParams: true })

router.patch("/:userId", auth, async (req, res) => {
    try {
        const { userId } = req.params
        if (userId) {
            const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
                new: true,
            })
            res.send({
                user: {
                    email: updatedUser.email,
                    userId: updatedUser._id,
                },
            })
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

router.patch("/:userId/addFriend", async (req, res) => {
    try {
        const { userId } = req.params
        const { friendId } = req.body

        if (userId && friendId) {
            let currentUser = await User.findOne({ _id: userId })
            const friend = await User.findOne({ _id: friendId })

            currentUser.friends.push(friend._id)

            const updatedUser = await User.findByIdAndUpdate(userId, currentUser, {
                new: true,
            })
            res.send(updatedUser)
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

router.patch("/:userId/removeFriend", async (req, res) => {
    try {
        const { userId } = req.params
        const { friendId } = req.body

        if (userId && friendId) {
            let currentUser = await User.findOne({ _id: userId })
            const friend = await User.findOne({ _id: friendId })

            currentUser.friends.filter((el) => el !== friend._id)

            const updatedUser = await User.findByIdAndUpdate(userId, currentUser, {
                new: true,
            })
            res.send(updatedUser)
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

router.patch("/:userId/getAllFriends", async (req, res) => {
    try {
        const { userId } = req.params
        const { friendId } = req.body

        if (userId) {
            let currentUser = await User.findOne({ _id: userId })

            if (currentUser.friends.length !== 0) {
                const findStructure = currentUser.friends.map((el) => ({
                    _id: el,
                }))

                const friends = await User.find({ $or: findStructure })
                res.send({
                    friends,
                })
            } else {
                res.status(400).json({
                    error: {
                        message: "У вас еще нет друзей",
                        code: 400,
                    },
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

router.get("/getAllUsers", auth, async (req, res) => {
    try {
        const data = await UserService.getAllUsers()
        res.status(200).send(data)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

module.exports = router

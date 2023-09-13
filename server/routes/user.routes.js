const express = require("express")
const User = require("../models/User")
const auth = require("../middleware/auth.middleware")
const UserService = require("../services/user.service")
const router = express.Router({ mergeParams: true })

router.get("/:userId", auth, async (req, res) => {
    try {
        const { userId } = req.params
        if (userId) {
            const user = await User.findById(userId)

            if (!user) {
                return res.status(400).send({
                    error: {
                        message: "Пользователя с таким id не найдено",
                        code: 400,
                    },
                })
            }

            res.send({
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
                    conversations: user.conversations,
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

router.patch("/:userId/update", auth, async (req, res) => {
    try {
        const { userId } = req.params
        if (userId) {
            const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
                new: true,
            })
            res.send({
                user: {
                    userId: updatedUser._id,
                    email: updatedUser.email,
                    firstName: updatedUser.firstName,
                    lastName: updatedUser.lastName,
                    gender: updatedUser.gender,
                    friends: updatedUser.friends,
                    posts: updatedUser.posts,
                    requests: updatedUser.requests,
                    birthDay: updatedUser.birthDay,
                    avatarPath: updatedUser.avatarPath,
                    conversations: updatedUser.conversations,
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
            let friend = await User.findOne({ _id: friendId })

            currentUser.friends.push(friend._id)
            friend.friends.push(currentUser._id)

            await User.findByIdAndUpdate(friendId, friend, {
                new: true,
            })
            const updatedUser = await User.findByIdAndUpdate(userId, currentUser, {
                new: true,
            })

            res.send({
                user: {
                    userId: updatedUser._id,
                    email: updatedUser.email,
                    firstName: updatedUser.firstName,
                    lastName: updatedUser.lastName,
                    gender: updatedUser.gender,
                    friends: updatedUser.friends,
                    posts: updatedUser.posts,
                    requests: updatedUser.requests,
                    birthDay: updatedUser.birthDay,
                    avatarPath: updatedUser.avatarPath,
                    conversations: updatedUser.conversations,
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

router.patch("/:userId/removeFriend", async (req, res) => {
    try {
        const { userId } = req.params
        const { friendId } = req.body

        if (userId && friendId) {
            let currentUser = await User.findOne({ _id: userId })
            let friend = await User.findOne({ _id: friendId })

            currentUser.friends = currentUser.friends.filter((el) => el !== friendId)
            friend.friends = friend.friends.filter((el) => el !== userId)

            await User.findByIdAndUpdate(friendId, friend, {
                new: true,
            })
            const updatedUser = await User.findByIdAndUpdate(userId, currentUser, {
                new: true,
            })

            console.log(friend._id)
            // console.log(userId, friendId, currentUser, friend)
            res.send({
                user: {
                    userId: updatedUser._id,
                    email: updatedUser.email,
                    firstName: updatedUser.firstName,
                    lastName: updatedUser.lastName,
                    gender: updatedUser.gender,
                    friends: updatedUser.friends,
                    posts: updatedUser.posts,
                    requests: updatedUser.requests,
                    birthDay: updatedUser.birthDay,
                    avatarPath: updatedUser.avatarPath,
                    conversations: updatedUser.conversations,
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

router.get("/:userId/getAllFriends", async (req, res) => {
    try {
        const { userId } = req.params

        if (userId) {
            let currentUser = await User.findOne({ _id: userId })

            if (currentUser.friends.length !== 0) {
                const findStructure = currentUser.friends.map((el) => ({
                    _id: el,
                }))

                const friends = await User.find({ $or: findStructure })
                const modFriends = friends.map((user) => ({
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
                    conversations: user.conversations,
                }))

                res.send({
                    friends: modFriends,
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

router.patch("/:userId/addConversation", async (req, res) => {
    try {
        const { userId } = req.params
        const { roomId, friendId } = req.body
        console.log(userId, roomId, "fr", friendId)
        if (userId && friendId && roomId) {
            let currentUser = await User.findOne({ _id: userId })
            let friend = await User.findOne({ _id: friendId })

            console.log(currentUser, friend)

            currentUser.conversations.push({ roomId, friendId })
            friend.conversations.push({ roomId, friendId: userId })

            await User.findByIdAndUpdate(friendId, friend, {
                new: true,
            })
            const updatedUser = await User.findByIdAndUpdate(userId, currentUser, {
                new: true,
            })

            res.send({
                user: {
                    userId: updatedUser._id,
                    email: updatedUser.email,
                    firstName: updatedUser.firstName,
                    lastName: updatedUser.lastName,
                    gender: updatedUser.gender,
                    friends: updatedUser.friends,
                    posts: updatedUser.posts,
                    requests: updatedUser.requests,
                    birthDay: updatedUser.birthDay,
                    avatarPath: updatedUser.avatarPath,
                    conversations: updatedUser.conversations,
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

router.get("/:userId/getConversationUsers", async (req, res) => {
    try {
        const { userId } = req.params

        if (userId) {
            let currentUser = await User.findOne({ _id: userId })

            if (currentUser.friends.length !== 0) {
                const findStructure = currentUser.conversations.map((el) => ({
                    _id: el.friendId,
                }))

                const users = await User.find({ $or: findStructure })
                const modUsers = users.map((user) => ({
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
                    conversations: user.conversations,
                }))

                res.send({
                    users: modUsers,
                })
            } else {
                res.status(400).json({
                    error: {
                        message: "У вас еще нет диалогов",
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
        const users = data.map((user) => ({
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
            conversations: user.conversations,
        }))

        res.status(200).send(users)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

module.exports = router

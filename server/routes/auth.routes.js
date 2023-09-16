const express = require("express")
const bcrypt = require("bcryptjs")
const { check, validationResult } = require("express-validator")
const TokenService = require("../services/token.service")
const User = require("../models/User")
const router = express.Router({
    mergeParams: true,
})

router.post("/signUp", [
    check("email", "Некорректный email").isEmail(),
    check("password", "Минимальная длина пароля 8 символов").isLength({
        min: 8,
    }),
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: {
                        message: "INVALID_DATA",
                        code: 400,
                        // errors: errors.array()
                    },
                })
            }

            const { email, password } = req.body
            const exitingUser = await User.findOne({
                email,
            })

            if (exitingUser) {
                return res.status(400).json({
                    error: {
                        message: "Пользователь с таким email уже существует",
                        code: 400,
                    },
                })
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const newUser = await User.create({
                ...req.body,
                password: hashedPassword,
            })

            const tokens = TokenService.generate({
                _id: newUser._id,
            })
            await TokenService.save(newUser._id, tokens.refreshToken)

            res.cookie("refreshToken", tokens.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: "None",
                secure: true,
            }) // for https add flag secure

            res.status(201).send({
                ...tokens,
                user: {
                    userId: newUser._id,
                    email: newUser.email,
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    gender: newUser.gender,
                    friends: newUser.friends,
                    posts: newUser.posts,
                    requests: newUser.requests,
                    birthDay: newUser.birthDay,
                    avatarPath: newUser.avatarPath,
                    conversations: newUser.conversations,
                    likes: newUser.likes,
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

// 1. validate
// 2. find user
// 3. compared hashed password
// 4. generate token
// 5. return data
router.post("/signInWithPassword", [
    check("email", "Email не корректный").normalizeEmail().isEmail(),
    check("password", "Пароль не может быть пустым").exists(),
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: {
                        message: "INVALID_DATA",
                        code: 400,
                        // errors: errors.array()
                    },
                })
            }

            const { email, password } = req.body

            const exitingUser = await User.findOne({
                email,
            })

            if (!exitingUser) {
                return res.status(400).send({
                    error: {
                        message: "Пользователя с таким email не найдено",
                        code: 400,
                    },
                })
            }

            const isPasswordEqual = await bcrypt.compare(password, exitingUser.password)
            if (!isPasswordEqual) {
                return res.status(400).send({
                    error: {
                        message: "INVALID_PASSWORD",
                        code: 400,
                    },
                })
            }

            const tokens = TokenService.generate({
                _id: exitingUser._id,
            })
            await TokenService.save(exitingUser._id, tokens.refreshToken)

            res.cookie("refreshToken", tokens.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            }) // for https add flag secure

            res.status(200).send({
                ...tokens,
                user: {
                    userId: exitingUser._id,
                    email: exitingUser.email,
                    firstName: exitingUser.firstName,
                    lastName: exitingUser.lastName,
                    gender: exitingUser.gender,
                    friends: exitingUser.friends,
                    posts: exitingUser.posts,
                    requests: exitingUser.requests,
                    birthDay: exitingUser.birthDay,
                    avatarPath: exitingUser.avatarPath,
                    conversations: exitingUser.conversations,
                    likes: exitingUser.likes,
                },
            })
        } catch (e) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже",
            })
        }
    },
])

router.post("/signOut", async (req, res) => {
    try {
        const { refreshToken } = req.cookies
        console.log(req.cookies)
        const token = await TokenService.removeToken(refreshToken)
        res.clearCookie("refreshToken")
        res.status(200).json(token)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

function isTokenInvalid(data, dbToken) {
    return !data || !dbToken
}

router.get("/token", async (req, res) => {
    try {
        const { refreshToken } = req.cookies
        const data = TokenService.validateRefresh(refreshToken)
        const dbToken = await TokenService.findToken(refreshToken)

        if (isTokenInvalid(data, dbToken)) {
            return res.status(401).json({
                message: "Unauthorized",
            })
        }

        const user = await User.findById(data._id)

        const tokens = TokenService.generate({
            _id: data._id,
        })
        await TokenService.save(data._id, tokens.refreshToken)

        res.cookie("refreshToken", tokens.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        })
        res.status(200).send({
            ...tokens,
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
                likes: user.likes,
            },
        })
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

module.exports = router

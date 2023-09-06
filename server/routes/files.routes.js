const express = require("express")
const User = require("../models/User")
const router = express.Router({
    mergeParams: true,
})
const auth = require("../middleware/auth.middleware")
const config = require("config")
const fs = require("fs")
const Uuid = require("uuid")

router.post("/uploadAvatar", auth, async (req, res) => {
    try {
        const file = req.files.file
        // console.log(req)
        const user = await User.findById(req.res.user._id)
        const avatarName = Uuid.v4() + ".jpg"
        file.mv(config.get("staticPath") + "\\" + avatarName)
        user.avatarPath = avatarName
        await user.save()
        res.status(200).json(user)
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

router.delete("/removeAvatar", auth, async (req, res) => {
    try {
        const user = await User.findById(req.res.user._id)
        fs.unlinkSync(config.get("staticPath") + "\\" + user.avatarPath)
        user.avatarPath = null
        await user.save()
        res.status(200).json(user)
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

module.exports = router

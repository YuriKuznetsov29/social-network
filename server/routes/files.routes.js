const express = require("express");
const User = require("../models/User");
const router = express.Router({
    mergeParams: true,
});
const auth = require("../middleware/auth.middleware");
const config = require("config");
const Uuid = require("uuid");

router.post("/uploadAvatar", auth, async (req, res) => {
    try {
        // console.log(req.user);
        const file = req.files.file;
        const user = await User.findById(req.res.user._id);
        const avatarName = Uuid.v4() + ".jpg";
        file.mv(config.get("staticPath") + "\\" + avatarName);
        console.log(req.res.user._id);
        user.avatarPath = avatarName;
        await user.save();
        res.status(200).json({
            message: "Аватар был загружен",
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

module.exports = router;

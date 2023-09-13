const auth = require("../middleware/auth.middleware");
const Message = require("../models/Message");
const express = require("express");
const router = express.Router({ mergeParams: true });

router.post("/getLastMessage", auth, async (req, res) => {
    try {
        const messages = await Message.find({ roomId: req.body.roomId });
        console.log(messages);
        res.send({
            message: messages[messages.length - 1],
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

module.exports = router;

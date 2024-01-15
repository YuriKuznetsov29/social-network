const auth = require("../middleware/auth.middleware");
const Message = require("../models/Message");
const User = require("../models/User");
const express = require("express");
const router = express.Router({ mergeParams: true });

router.post("/getLastMessage", auth, async (req, res) => {
    try {
        const messages = await Message.find({ roomId: req.body.roomId });

        const test = await Promise.all(
            messages.map(({ roomId, author }) =>
                Message.aggregate([{ $match: { roomId, author } }])
            )
        );

        // res.send({
        //     message: messages[messages.length - 1],
        // })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

router.post("/getDialogs", auth, async (req, res) => {
    try {
        const { conversations } = req.body;

        if (!conversations || (!Array.isArray(conversations) && !conversations.length)) {
            return res.status(400).send({
                error: {
                    message: "У вас нет диалогов",
                    code: 400,
                },
            });
        }

        const dialogs = await Promise.all(
            conversations.map(async ({ roomId, friendId, _id }) => {
                const message = await Message.aggregate([
                    { $match: { roomId } },
                    { $sort: { createdAt: -1 } },
                    { $limit: 1 },
                    { $addFields: { userId: { $toObjectId: "$author" } } },
                    {
                        $lookup: {
                            from: "users",
                            localField: "userId",
                            foreignField: "_id",
                            as: "user",
                        },
                    },
                ]);

                return {
                    id: roomId,
                    message: message[0],
                    companion: await User.findOne({ _id: friendId }),
                    conversation: { roomId, friendId },
                };
            })
        );

        res.send({
            dialogs,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});
module.exports = router;

const Message = require("../../models/Message");
// import { removeFile } from "../../utils/file.js";
const onError = require("../../middleware/onError.js");

const messages = {};

module.exports = function messageHandlers(io, socket) {
    const { roomId } = socket;

    const updateMessageList = () => {
        io.to(roomId).emit("message_list:update", messages[roomId]);
        // console.log(roomId)
    };

    socket.on("message:get", async () => {
        try {
            const _messages = await Message.find({ roomId });

            messages[roomId] = _messages;

            updateMessageList();
        } catch (e) {
            onError(e);
        }
    });

    socket.on("message:add", (message) => {
        Message.create(message).catch(onError);

        // message.createdAt = Date.now()
        messages[roomId].push(message);
        updateMessageList();
    });

    socket.on("message:remove", (messageId) => {
        // const { messageId, messageType, textOrPathToFile } = message

        Message.deleteOne({ messageId })
            // .then(() => {
            //     if (messageType !== "text") {
            //         removeFile(textOrPathToFile);
            //     }
            // })
            .catch(onError);

        messages[roomId] = messages[roomId].filter((m) => m.messageId !== messageId);

        updateMessageList();
    });
};

const Message = require("../../models/Message");
// import { removeFile } from "../../utils/file.js";
const onError = require("../../middleware/onError.js");

const messages = {};

module.exports = function messageHandlers(io, socket) {
    const { roomId } = socket;
    let page = 1;

    const updateMessageList = async () => {
        let messages = await Message.find({ roomId });
        const limit = messages.length - page * 20 > 0 ? messages.length - page * 20 : 0;
        const pageMessages = messages.slice(limit, messages.length);
        const hasMore = pageMessages.length !== messages.length;

        io.to(roomId).emit("message_list:update", pageMessages, hasMore);
        // io.to(roomId).emit("message_list:update", messages[roomId]);
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

    socket.on("message:add", async (message) => {
        await Message.create(message).catch(onError);

        // message.createdAt = Date.now()
        messages[roomId].push(message);
        updateMessageList();
    });

    socket.on("message:loadMore", () => {
        console.log("more");
        page++;
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

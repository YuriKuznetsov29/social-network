const { Schema, model } = require("mongoose")

const schema = new Schema(
    {
        messageId: {
            type: String,
            required: true,
            unique: true,
        },
        // messageType: {
        //     type: String,
        //     required: true,
        // },
        textOrPathToFile: {
            type: String,
            required: true,
        },
        roomId: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        // userName: {
        //     type: String,
        //     required: true,
        // },
        // avatarPath: {
        //     default: "",
        //     type: String,
        // },
    },
    {
        timestamps: true,
    }
)

module.exports = model("Message", schema)

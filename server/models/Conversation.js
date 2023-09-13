const { Schema, model } = require("mongoose")

const schema = new Schema(
    {
        roomId: { type: String },
        friendId: { type: String },
    },
    {
        timestamps: true,
    }
)

module.exports = model("Conversation", schema)

const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String },
        avatarPath: { type: String },
        birthDay: { type: String },
        gender: { type: String },
        conversations: [{ roomId: String, friendId: String }],
        friends: [{ default: [], type: String }],
        posts: [{ default: [], type: Schema.Types.ObjectId, ref: "Post" }],
        requests: [[{ default: [], type: Schema.Types.ObjectId, ref: "User" }]],
    },
    {
        timestamps: true,
    }
);

module.exports = model("User", schema);

const { Schema, model } = require("mongoose")

const schema = new Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String },
        avatarPath: { type: String },
        birthDay: { type: String },
        gender: { type: String },
        conversations: [{ roomId: { type: String }, friendId: { type: String } }],
        friends: [{ default: [], type: String }],
        posts: { default: 0, type: Number },
        likes: [{ default: [], type: Schema.Types.ObjectId, ref: "Like" }],
        isOnline: { default: false, type: Boolean },
        lastSeenOnline: { type: Date, default: Date.now },
        city: { type: String },
    },
    {
        timestamps: true,
    }
)

module.exports = model("User", schema)

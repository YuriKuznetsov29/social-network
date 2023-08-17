const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String },
        avatar: { type: String },
        friends: [],
        posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    },
    {
        timestamps: true,
    }
);

module.exports = model("User", schema);

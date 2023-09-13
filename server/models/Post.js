const { Schema, model } = require("mongoose")

const schema = new Schema(
    {
        author: { type: String },
        text: { default: "", type: String },
        imagePath: { type: String },
        date: { type: Date, default: Date.now },
        likes: { default: 0, type: Number },
        comments: [[{ default: [], type: Schema.Types.ObjectId, ref: "Comments" }]],
    },
    {
        timestamps: true,
    }
)

module.exports = model("Post", schema)

const { Schema, model } = require("mongoose")

const schema = new Schema(
    {
        author: { type: String },
        postId: { type: String },
        body: { type: String },
        // imagePath: { type: String },
        // date: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    }
)

module.exports = model("Comments", schema)

const { Schema, model } = require("mongoose")

const schema = new Schema(
    {
        author: { type: String },
        postId: { type: String },
    },
    {
        timestamps: true,
    }
)

module.exports = model("Like", schema)

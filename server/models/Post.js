const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    title: { type: String },
    author: { type: String },
    body: { type: String },
    images: [{ type: String }],
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Post", schema);

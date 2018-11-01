const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommentSchema = mongoose.Schema({
    title: String,
    content: String,
    reviewId: {type: Schema.Types.ObjectId, ref: "Review"}
});

module.exports = mongoose.model("Comment", CommentSchema);

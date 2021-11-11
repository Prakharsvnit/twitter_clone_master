const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    tweetId: { type: mongoose.Schema.Types.ObjectId, ref: 'tweet', required: true },
    commentTitle: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true}
})

module.exports = mongoose.model("comment", commentSchema);
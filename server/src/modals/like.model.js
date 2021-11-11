const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
    tweetId: { type: mongoose.Schema.Types.ObjectId, ref: 'tweet', required: true },
    like : { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true}
})
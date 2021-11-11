const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true,unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true ,unique: true},
    profile_pic: { type: String},
    cover_pic: { type: String},
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "user",unique:true}],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref:"user",unique:true}],
    bio: { type: String },
    joinedDate: { type: String ,required: true},
    location: { type: String},
    website: { type: String},
    dob: { type: String, required: true}
}, {
    versionKey: false,
    timestampKey: true,
})

const User = mongoose.model("user", userSchema);

module.exports = User;
const express = require('express');
const router = express.Router();

const Tweet = require("../modals/tweet.model");
const upload = require("../midddleware/fileUploads")

router.get("", async (req, res) => {
    try {
        const tweet = await Tweet.find({}).populate("userId").lean().exec();
        return res.status(200).json({tweet})
    } catch (error) {
        return res.status(400).send(error)
    }
})

router.post("",upload.single("image"),async (req, res) => {
    try {
        console.log(req.file);
        const tweet = await Tweet.create({
            userId: req.body.userId,
            title: req.body.title,
            image: req.file.path,
            comment: req.body.comment,
            like: req.body.like,
            retweet: req.body.retweet,
        });
        return res.status(200).json({tweet})
    } catch (error) {
        return res.status(400).send(error)
    }
})


router.get("/:id", async (req, res) => {
    try {
        const tweet = await Tweet.findById(req.params.id).populate("userId").lean().exec();
        const userName = tweet.userId.name;
        const tweeted = tweet.title;
        const string= userName+ " "+" twetted "+ tweeted
        return res.status(200).send(string)
    } catch (error) {
        return res.status(400).send(error)
    }
})


router.delete("/:id", async (req, res) => {
    try {
        const tweet = await Tweet.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send("tweet deleted")
    } catch (error) {
        return res.status(400).send(error)
    }
})


module.exports = router;
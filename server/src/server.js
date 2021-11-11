const express = require('express');
const connect = require('./config/db')
const cors = require('cors');
const userController = require("./controllers/user.controller")
const tweetController = require("./controllers/tweet.controller")
const app = express();


app.use(cors());
app.use(express.json());

app.use("/user", userController);
app.use("/tweet", tweetController);

const start = async () => {
    await connect();
    app.listen(3007, () => {
        console.log("listening on port 3007")
    })
}

module.exports = start;
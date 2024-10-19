const express = require("express");
const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequest");
const userRouter = express.Router();
const User = require("../models/user");

//get all the pending connection request for the loggedin user
userRouter.get("/user/requests", userAuth, async (req, res) => {
    try {
        const loggedInUser = req.user;
        const connectionRequests = await ConnectionRequest.find({
            toUserId: loggedInUser._id, status: "Interested"
        }).populate("fromUserId", ["firstName", "lastName", "age", "about"])


        if (!connectionRequests) {
            return res.status(400).json({ message: "Connection request not found!" })
        }
        res.json({ message: "Request Connection fetched: ", connectionRequests })

    } catch (err) {
        res.status(400).send("Error: " + err.message);
    }
})

userRouter.get("/user/connections", userAuth, async (req, res) => {
    try {
        const loggedInUser = req.user;
        const connectionRequests = await ConnectionRequest.find({
            $or: [{ toUserId: loggedInUser._id, status: "Accepted" }, { fromUserId: loggedInUser._id, status: "Accepted" }],
        }).populate("fromUserId", ["firstName", "lastName", "age", "about"]).populate("toUserId", ["firstName", "lastName", "age", "about"])

        const data = connectionRequests.map((row) => {
            if (row.fromUserId._id.toString() === loggedInUser._id.toString()) {
                return row.toUserId;
            } else
                return row.fromUserId;
        }
        );
        res.json({ message: "All Connection fetched: ", data })
    } catch (err) {
        res.status(400).send("Error: " + err.message);
    }
})

userRouter.get("/feed", userAuth, async (req, res) => {
    try {
        const loggedInUser = req.user;

        const page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit) || 10;
        limit = limit > 50 ? 50 : limit;
        const skip = (page - 1) * limit;

        //find all connection requests(sent + received)
        const connectionRequests = await ConnectionRequest.find({
            $or: [{ fromUserId: loggedInUser._id }, { toUserId: loggedInUser._id }]
        }).select(("fromUserId toUserId"));

        const hidefronuserfeed = new Set();
        connectionRequests.forEach((req) => {
            hidefronuserfeed.add(req.fromUserId.toString());
            hidefronuserfeed.add(req.toUserId.toString());
        })
        // console.log(hidefronuserfeed);

        const users = await User.find({
            $and: [{ _id: { $nin: Array.from(hidefronuserfeed) } },
            { _id: { $ne: loggedInUser._id } }]
        }).select("firstName lastName age about").skip(skip).limit(limit);



        res.send(users);

    } catch (err) {
        res.status(400).json({ message: "Error: " + err.message })
    }
})

module.exports = userRouter;
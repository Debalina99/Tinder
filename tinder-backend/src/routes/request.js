const express = require("express");
const { userAuth } = require("../middlewares/auth")
const ConnectionRequest = require("../models/connectionRequest");
const requestRouter = express.Router();
const User = require("../models/user");

requestRouter.post("/request/send/:status/:toUserId", userAuth, async (req, res) => {
    try {
        const fromUserId = req.user._id;
        const toUserId = req.params.toUserId;
        const status = req.params.status;

        const allowedStatus = ["Ignored", "Interested"];
        if (!allowedStatus.includes(status)) {
            return res.status(400).json({ message: "Invalid status type: " + status })
        }
        //if there is an existing connection request
        const existingConnectionrequest = await ConnectionRequest.findOne({
            $or: [{ fromUserId, toUserId },
            { fromUserId: toUserId, toUserId: fromUserId }],
        })
        if (existingConnectionrequest) {
            return res.status(400).send({ message: "Connection request already exits!" })
        }

        //toUser exits in DB or not
        const toUser = await User.findById(toUserId);
        if (!toUser) {
            return res.status(400).json({ message: "User is not valid!" });
        }

        const connectionRequest = new ConnectionRequest({
            fromUserId, toUserId, status
        })
        const data = await connectionRequest.save();
        res.json({ message: req.user.firstName + " is " + status + " in " + toUser.firstName  , data })
    } catch (err) {
        res.status(400).send("Error: " + err.message);
    }
})

requestRouter.post("/request/review/:status/:requestId", userAuth, async (req, res) => {
    try{
        const loggedInUser=req.user;
        const {status,requestId}=req.params;

        const allowedStatus=["Accepted","Rejected"];
        if(!allowedStatus.includes(status)){
            return res.status(400).json({message:"Status not allowed!"});
        }

        const connectionRequest=await ConnectionRequest.findOne({
            _id:requestId, toUserId: loggedInUser._id, status:"Interested"
        })
        if(!connectionRequest){
            return res.status(400).json({message: "Connection request not found!"})
        }

        connectionRequest.status=status;
        const data= await connectionRequest.save();
        res.json({message:"Connection request " + status, data})
    }catch(err){
        res.status(400).send("Error: " + err.message);
    }
}
)

// requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
//     const user = req.user;
//     console.log("Sending a connecton request!");
//     res.send(user.firstName + " Sent the Connection Request!")
// })

module.exports = requestRouter;
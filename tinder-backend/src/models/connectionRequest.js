const mongoose = require("mongoose");

const connectionRequestSchema =new mongoose.Schema({
    fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User", //reference to the User collectiom
        required: true,
    },
    toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: {
            values:["Ignored", "Interested", "Accepted", "Rejected"],
            message: `{VALUE} is not valid status!`,
        }
    }
}, {
    timestamps: true,
});

connectionRequestSchema.pre("save", function(next){
    const connectionRequest=this;
    //check if the fromUserId is same as toUserId
    if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)){
        throw new Error("cannot send connection request!");
    }
    next();
})


const ConnectionRequestModel= new mongoose.model("ConnectionRequest",connectionRequestSchema);
module.exports=ConnectionRequestModel;
const User = require("../models/user");
const jwt = require("jsonwebtoken");


const userAuth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");

    if (!token) {
        return res.status(401).send({ error: "No token provided" });
    }
        const decodeobj = await jwt.verify(token, "Deb@12");
        const { _id } = decodeobj;

        const user = await User.findById(_id);
        if (!user) {
            throw new Error("User not found!");
        }
        req.user = user;
        next();

    } catch (err) {
        res.status(400).send("Error: " + err.message)
    }
}

module.exports = { userAuth };
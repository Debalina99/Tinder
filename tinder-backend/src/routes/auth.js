const express = require("express");
const User = require("../models/user");
const { validateSignupData } = require("../utils/validation")
const bcrypt = require("bcrypt")
const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
    // console.log("Received data:", req.body);
    try {
        validateSignupData(req);

        //encrypt the password
        const { name, email, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 10)
        // console.log(passwordHash);

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email is already registered." });
        } 

        const user = new User({
            name, email, password: passwordHash,
        })

        await user.save();
        res.status(201).json({ message: "User added successfully!" });
    } catch (err) {
        // console.error("Error during signup:", err);
        res.status(400).json({message: err.message})
    }
})


authRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            throw new Error("Invalid Credentials1!")
        }
        const isPasswordValid = await user.validatePassword(password);
        if (isPasswordValid) {
            //create a jwt token
            const token = await user.getJWT();
            console.log(token);

            //Send the cookie back to user
            res.cookie("token", token, { expires: new Date(Date.now() + 8 * 3600000) });
            res.send("Login Sucessfull!");
        } else {
            throw new Error("Invalid Credentials2!");
        }

    } catch (err) {
        res.status(400).send("Something went wrong!" + err.message);
    }
})

authRouter.post("/logout", (req, res) => {
    res.cookie("token", null, { expires: new Date(Date.now()) });
    res.send("Logout Sucessfull!");
})

module.exports = authRouter;
const express = require("express");
const { userAuth } = require("../middlewares/auth")
const { validateEditProfileData } = require("../utils/validation")
const profileRouter = express.Router();

profileRouter.post("/profile/view", userAuth, async (req, res) => {

    try {
        const user = req.user;
        res.send(user);
    } catch (err) {
        res.status(400).send("Error: " + err.message);
    }
})

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
    try {
        if (!validateEditProfileData(req)) {
            throw new Error("Invalid edit request!");
        }

        const loggedUser = req.user;

        Object.keys(req.body).forEach((key) => (loggedUser[key] = req.body[key]));
        await loggedUser.save();
        // console.log(loggedUser);
        res.send(`${loggedUser.firstName}, your profile is updated successfully!`)


    } catch (err) {
        res.status(400).send("Error: " + err.message);
    }
})

profileRouter.patch("/profile/forgotPassword", userAuth, async (req, res) => {
    
});

module.exports = profileRouter;
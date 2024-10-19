const express = require("express");
const { userAuth } = require("../middlewares/auth")
const { validateEditProfileData } = require("../utils/validation")
const profileRouter = express.Router();

profileRouter.post("/profile/view", userAuth, async (req, res) => {

    try {
        const user = req.user;
        if (!user) {
            throw new Error('User not authenticated');
        }
        res.status(200).json(user);
    } catch (err) {
        console.error("Profile fetch error:", err.message);
        res.status(400).json({ message: "Failed to fetch profile!", error: err.message });
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
        res.status(200).json({
            message: `${loggedUser.name}, your profile is updated successfully!`,
            updatedProfile: loggedUser
        });

    } catch (err) {
        res.status(400).json({ message: "Failed to update profile!", error: err.message });
    }
})

profileRouter.patch("/profile/forgotPassword", userAuth, async (req, res) => {
    
});

module.exports = profileRouter;
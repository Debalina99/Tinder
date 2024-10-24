const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minlength: [2, 'Name should have at least 2 characters'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email address" + value);
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error("Enter a strong password!" + value);
            }
        }
    },
    age: {
        type: Number,
        min: [18, 'Age must be at least 18!'],
        max: [100, 'Age must be less than 100!'],
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female', 'other'],
            message: '{VALUE} is not supported as gender!'
        },
        default: 'other'
    },
    photoUrl: {
        type: String,
        validate(value) {
            if (!validator.isURL(value)) {
                throw new Error("Invalid URL" + value);
            }
        }
    },
    about: {
        type: String,
        default: "This is a default description about the user!",
        minLength: 4,
    },
    interests: {
        type: [String],
        
    }
}, {
    timestamps: true,
})

userSchema.methods.getJWT = async function () {
    const user = this;
    const token = await jwt.sign({ _id: user._id }, "Deb@12", { expiresIn: '1d' });
    return token;
}
userSchema.methods.validatePassword = async function (passwordInputbyUser) {
    const user = this;
    const passwordHash = user.password;
    const isPasswordValid = await bcrypt.compare(passwordInputbyUser, passwordHash);
    return isPasswordValid;
}

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
const express = require("express");
const connectDB = require("./config/database")
const app = express();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
app.use(express.json());
app.use(cookieParser());
const cors = require('cors');
app.use(cors({
    origin: 'https://tinder-murex.vercel.app',
    credentials: true
  }));


const authRouter=require("./routes/auth");
const profileRouter=require("./routes/profile");
const requestRouter=require("./routes/request");
const userRouter = require("./routes/user");

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);
app.use("/",userRouter);




connectDB().then(() => {
    console.log("Database connected successfully!!");
    app.listen(3000, () => {
        console.log("connected with port 3000")
    })

}).catch(err => {
    console.log("Database cannot connected successfully!!" + err.message);

})



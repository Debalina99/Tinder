const validator =require("validator");

const validateSignupData =(req)=>{
    const {name,email,password}=req.body;
if(!name){
    throw new Error("Name is not valid!");
}else if(!validator.isEmail(email)){
    throw new Error("Email is not valid!");
}else if(!validator.isStrongPassword(password)){
    throw new Error("Please enter a strong password!")
}
}
const validateEditProfileData=(req)=>{
    const allowedEditFields = ["name","email","photoUrl", "about", "gender", "age", "skills"];
        const isEditAllowed = Object.keys(req.body).every((k) =>
            allowedEditFields.includes(k)
        );
        return isEditAllowed;
        
}

module.exports={
 validateSignupData,validateEditProfileData
}
const mongoose = require("mongoose");
// const Mail = require("nodemailer/lib/mailer");
const userSchema =mongoose.Schema({
    username:{
        type:String,
    },
    password:{
        type:String,
        minlength:6
    },
    email:{
        type:String
    },   
    posts:[{
        type:mongoose.Schema.Types.ObjectId,ref:'Post'
    }]
})
module.exports=mongoose.model('User',userSchema);
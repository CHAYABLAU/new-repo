const User = require('../models/user.model')
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')

dotenv.config();

const register = async (req, res) => {
  try {
    let result = await User.findOne({
      email: req.body.email
    });
    console.log(result);
    console.log("result");
    if (result)
      res.status(400).send({ message: "Failed! Email is already in use!" });
    else {
      let newUser = new User(req.body);

      console.log("from try")
      await newUser.save();
      let token = jwt.sign(req.body, process.env.ACCESS_TOKEN_SECRET)
      let decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

      res.status(200).json({ "newUser": newUser, message: "User was registered successfully!" }).send();
      console.log("token" + token);
    }
  }
  catch (error) {
    console.log('eror' + error)
    console.log("from cach")
    res.status(404).send(error)

  }
}

const login = async (req, res) => {
try{
  let currentEmail = await User.findOne({ email: req.body.email })
  let currentPassword =await User.findOne({ password: req.body.password })
  console.log("req.boby")
console.log(req.body)



  if(currentEmail  &&currentPassword){
    let token = jwt.sign(req.body, process.env.ACCESS_TOKEN_SECRET)
    let decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    // currentEmail.token=token;
    console.log(currentEmail)
    console.log("new")
    res.status(200).json({"user":currentEmail,"token":token});
}}
catch(err){
  console.log('eror' + err)
  res.status(404).send(err)
  }
    
}

module.exports = { register, login }

// exec((err, user) => {
//   if (err) {
//     res.status(500).send({ message: err });
//     return;
//   }
//   if (!user) {
//     return res.status(404).send({ message: "User Not found." });
//   }

 // let currentPassword =await User.findOne({ username: req.body.password }).exec((err, user) => {
    //   if (err) {
    //     res.status(500).send({ message: err });
    //     return;
    //   }
    //   if (!user) {
    //     return res.status(404).send({ message: "User Not found." });
    //   }
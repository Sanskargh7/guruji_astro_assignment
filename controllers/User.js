const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");

const generateJwtToken = (_id, role) => {
  return jwt.sign({ _id, role }, 'sankar', {
    expiresIn: "1d",
  });
};

exports.signup = async (req, res) => {

  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res
      .status(400)
      .json({ success: false, msg: "user already register" });
  }
  const { firstName, lastName, email, password } = req.body;
  const hash_password = await bcrypt.hash(password, 10);
  const insertUser = new User({
    firstName,
    lastName,
    email,
    hash_password,
    username: shortid.generate(),
  });
  const insertedUser = await insertUser.save();
  if (insertedUser) {
    const token = generateJwtToken(insertUser._id, insertUser.role);
    return res.status(200).json({ token: token, user: insertedUser });
  }
};

exports.signin = async(req, res) => {
  // User.findOne({ email: req.body.email }).exec(async (error, user) => {
  //   if (error) return res.status(400).json({ error });
  //   if (user) {
  //     const isPassword = await user.authenticate(req.body.password);
  //     if (isPassword && user.role === "user") {
       
  //       const token = generateJwtToken(user._id, user.role);
  //       const { _id, firstName, lastName, email, role, fullName } = user;
  //       res.status(200).json({
  //         token,
  //         user: { _id, firstName, lastName, email, role, fullName },
  //       });
  //     } else {
  //       return res.status(400).json({
  //         message: "Something went wrong",
  //       });
  //     }
  //   } else {
  //     return res.status(400).json({ message: "Something went wrong" });
  //   }
  // });
const findUser=await User.findOne({email:req.body.email});
if(findUser){
  if(findUser.role==='user'){
    const token=generateJwtToken(findUser._id,findUser.role)
      const{_id,firstName,lastName,role,email}=findUser
    
  
  return res.status(200).json({success:true,token:token,_id,firstName,lastName,role,email})
  }else{
    return res.status(400).json({success:false,msg:"something went wrong"})
  }
}
};

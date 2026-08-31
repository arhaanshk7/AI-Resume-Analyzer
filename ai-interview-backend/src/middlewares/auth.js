const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req,res,next)=>{

    const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({
            message:"Please login first"
        });
    }


    const decoded = jwt.verify(
        token,
        "mysecretkey"
    );


    const user = await User.findById(decoded.id);


    req.user = user;

    next();

}


module.exports = auth;
import jwt from 'jsonwebtoken';
import User from '../models/User.js'
import bcrypt from 'bcrypt';
import dotenv from "dotenv";

dotenv.config();

const login = async (req,res) => {
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email})
        if(!user) {
            return res.status(404).json({success: false, error: "User not Found"})
        } 
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(404).json({success: false, error: "Password mismatch"})
        }

        //creating jwt token
        const token = jwt.sign({_id: user._id,role: user.role},process.env.JWT_SECRET_KEY, {expiresIn: "10d"});
        res.status(200).json({
            success: true, 
            token, 
            user: {_id:user._id, name: user.name, role: user.role}
        })
    } catch(err) {
        console.log(err);
    }
}

const verify = (req,res)=> {
    return res.status(200).json({success:true, user:req.user})
}

export {login, verify};
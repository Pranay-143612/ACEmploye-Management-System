import User from './models/User.js';
import bcrypt from 'bcrypt'
import connectToDB from './DB/db.js';

const userRegister = async () => {
    await connectToDB();
    try {
        const hashPW = await bcrypt.hash("admincse",10);
        const newUser = new User({
            name: "Admin",
            email: "admincse@gmail.com",
            password: hashPW,
            role: "Admin",
        })
        await newUser.save()
    } catch (err) {
        console.log(err);
    }
}

userRegister();
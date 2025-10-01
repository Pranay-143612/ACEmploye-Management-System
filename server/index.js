import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";
import authRouter from './routes/auth.js'
import departmentRouter from './routes/department.js'
import connectToDB from './DB/db.js';

dotenv.config();

connectToDB();
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth',authRouter) 
app.use('/api/department',departmentRouter) 

app.get('/',(req,res) => {
    res.send("Hello");
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})

//admin role 

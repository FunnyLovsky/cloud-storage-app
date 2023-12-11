import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import cors from 'cors'
import authRouter from "./routes/auth.routes";
import fileRouter from "./routes/file.routes";

const app = express();
const PORT = process.env.PORT;
app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use('/api', authRouter);
app.use('/api', fileRouter);


const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL!)
        app.listen(PORT, () => console.log('Server started on port:', PORT))
    } catch (e: any) {
        console.log(e.message)
    }
}

start()
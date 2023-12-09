import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import router from "./routes/auth.routes";

const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL!)
        app.listen(PORT, () => console.log('Server started on port:', PORT))
    } catch (e: any) {
        console.log(e.message)
    }
}

start()
import  express from "express"
import conn from "./db.js";
import dotenv from "dotenv"
import cors from "cors";
import bodyParser from "body-parser";
import authroute from "./routes/authroute.js";

const app=express();

const port=5000;

app.get('/test',(req,res)=>{
    res.send("testing");
});

dotenv.config();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1/auth", authroute);

conn();

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});
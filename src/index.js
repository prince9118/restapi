import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app=express();
const port = process.env.PORT||3001;
console.log(port); 

app.use(express.json());
app.use(cors);

// app.get("health")

app.listen(port,()=>{
    console.log(`Server is running on http:localhost ${port} `);
});

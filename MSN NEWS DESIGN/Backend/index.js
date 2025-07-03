import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
  console.log("Database is connected")
})
.catch((err)=>{
  console.log(err)
})

const app = express()

const PROT = 3000;
app.listen(PROT, ()=>{
  console.log(`server is running on https://localhost:${PROT}`)
})
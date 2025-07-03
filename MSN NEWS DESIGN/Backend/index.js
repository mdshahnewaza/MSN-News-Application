import express from "express"

const app = express()

const PROT = 3000;
app.listen(PROT, ()=>{
  console.log(`server is running on https://localhost:${PROT}`)
})
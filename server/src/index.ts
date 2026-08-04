import express from "express"
import "dotenv/config" 
const app = express();



app.get("/", (req , res) => {
    res.send("Hello World")
})

app.get("/health" , (req,res) => {
    res.status(200).json({status : "ok"})
})

app.listen(process.env.PORT , () => {
    console.log(`Server is listening on  http://localhost:${process.env.PORT}`)
})
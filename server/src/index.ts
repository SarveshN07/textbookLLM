import express from "express"
import "dotenv/config" 
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
const app = express();

app.all('/api/auth/{*any}', toNodeHandler(auth));
app.use(express.json());


app.get("/", (req , res) => {
    res.send("Hello World")
})

app.get("/health" , (req,res) => {
    res.status(200).json({status : "ok"})
})

app.listen(process.env.PORT , () => {
    console.log(`Server is listening on  http://localhost:${process.env.PORT}`)
})
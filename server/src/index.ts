import express from "express"
import "dotenv/config" 
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
const app = express();
import cors from "cors";
import { registerRoutes } from "./routes/index.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";


const clientUrl = process.env.CLIENT_URL ?? "http://localhost:3001";


app.use(
    cors({
        origin: clientUrl,
        credentials: true,
    }),
);

app.all('/api/auth/{*any}', toNodeHandler(auth));
app.use(express.json());


app.get("/", (req , res) => {
    res.send("Hello World")
})

app.get("/health" , (req,res) => {
    res.status(200).json({status : "ok"})
})


registerRoutes(app);

app.use(errorHandler)

app.listen(process.env.PORT , () => {
    console.log(`Server is listening on  http://localhost:${process.env.PORT}`)
})
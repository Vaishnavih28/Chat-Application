import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from './routes/user.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';
import {app , server} from './socket/socket.js'

const PORT = process.env.PORT || 5000

dotenv.config(); // to use environment variables

app.use(express.json()); //to get data/parse from request body always use before routes is defined
app.use(cookieParser()); // to access the cookies defined before routes.


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

// app.get("/",(req,res)=>{
//     res.send("Hello world")
// });




server.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server listens ${PORT}`)
})
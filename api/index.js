import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import roomsRoute from "./routes/rooms.js"
import hotelsRoute from "./routes/hotels.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser"
const app = express()
dotenv.config()

const connect = async() =>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongo!")
  } catch (error) {
   throw error ;
  }
}

mongoose.connection.on("disconnected" , ()=> {
    console.log("Mongo disconnected!")
})


mongoose.connection.on("connected" , ()=> {
    console.log("Mongo connected!")
})

app.get("/", (req,res)=>{
    res.send("hello, first req")
})

//middlewares

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoute)
app.use("/api/rooms", roomsRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/users", usersRoute)

app.use((err,req,res,next) => {
    const errorStatus = err.errorStatus || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        errorMessage: errorMessage,
        stack: err.stack    
    }) 
})

app.listen(8800, ()=> {
    connect()
    console.log("Connected to backend!")
})

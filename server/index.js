import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cookierParser from 'cookie-parser'
import AuthRouter from './Routes/auth.js'
import UsersRouter from './Routes/users.js'
import HotelsRouter from './Routes/hotels.js'
import RoomsRouter from './Routes/rooms.js'

dotenv.config()
const app = express()

//Dotenv
const PORT = process.env.PORT || 8000
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

//Middlewares
app.use(express.json())
app.use(cors())
app.use(cookierParser())

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.cnml8oe.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
    .then(() => console.log('DB Ok'))
    .catch((err) => console.log(err))

app.listen(PORT, () => console.log(`Server start on Port ${PORT}`))

//Routes
app.use('/api/auth', AuthRouter)
app.use('/api/users', UsersRouter)
app.use('/api/hotels', HotelsRouter)
app.use('/api/rooms', RoomsRouter)

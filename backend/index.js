import express from "express"
import mongoose from "mongoose"
const app = express()

import {PORT, MONGO} from "./helper.js"

const connect =()=> {
    mongoose.connect(MONGO).then(() => {
        console.log(`Connected to DB`)
    }).catch((err) => {
        console.log(err, "Error")
        throw err
    })
}

app.listen(PORT, () => {
    connect()
    console.log(`Server Running...at ${PORT}`)
}) 
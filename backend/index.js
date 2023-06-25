import express from "express"
import mongoose from "mongoose"
import { MONGO, PORT} from "./config/index.js";
import errorHandler from "./middlewares/errorHandler.js";

mongoose.connect(MONGO, {
    useNewUrlParser: true, useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', console.error.bind(console, "connection error"))
db.once('open', ()=> {
    console.log("DB Connected...")
})

const app = express()

app.use(express.json())

app.use('/api', routes)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server Running...at ${PORT}`)
}) 
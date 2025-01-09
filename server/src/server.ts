import express from 'express'
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from './db';

// App Config
const app = express()
const port = 5000
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/localdocs"

// Connect to MongoDB
connectDB(MONGO_URI);

// Cors and such
let corsConfig = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

// Middleware
app.use(cors(corsConfig))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/static', express.static('public'))


// Local Routes
app.get("/", (req: express.Request, res: express.Response) => {
    res.send("This is the main route for the Express Template V1 running JS")
})

// Routes
const createRoute = require("./routes/create")
const docsRoute = require("./routes/docs")

app.use("/create", createRoute)
app.use("/docs", docsRoute)

// Run app
app.listen(port, () => {
    console.log(`App running on ${port}`)
})
const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const liveScoreRoute = require('./routes/liveScoreRoute')
const matchesRoute = require('./routes/matchRoute')
const loginRoute = require('./routes/loginRoute')
const seasonRoute = require('./routes/poinTableRoute')
const playerRoute = require('./routes/playerroute')

const core = require('cors')

const app = express()

const PORT = process.env.PORT || 5000

dotEnv.config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(core())

app.use('/Cricbuzz/liveScore', liveScoreRoute)
app.use('/Cricbuzz/matches', matchesRoute)
app.use('/Cricbuzz/login', loginRoute)
app.use('/Cricbuzz/pointable', seasonRoute)
app.use('/Cricbuzz/players', playerRoute)


mongoose.connect(process.env.cricbuzz_db,{ connectTimeoutMS: 50000 } )
.then(()=> {
    console.log("MongoDB is connected")
}).catch((error)=> {
    console.log("Failed to Connect MongoDB ")
    console.log(error, error.message)
})

app.listen(PORT, ()=>{
    console.log(`server started and running at ${PORT}`)
})
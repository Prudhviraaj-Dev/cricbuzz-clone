const mongoose = require('mongoose')


const livescoreSchema = new mongoose.Schema({
    match: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    team1: {
        type: String,
        required: true
    },
    score1: {
        type: Number,
        required: true
    },
    team2: {
        type: String,
        required: true
    },
    score2: {
        type: Number,
        required: true
    },
    toss: {
        type: String,
        required: true 
    },
    result: {
        type: String,
        required: true  
    }
})

module.exports = mongoose.model('liveScore', livescoreSchema)
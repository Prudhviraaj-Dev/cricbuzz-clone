const mongoose = require('mongoose')


const matchSchema = new mongoose.Schema({
    flag1: {
        type: String,
        required: true
    },
    team1: {
        type: String,
        required: true
    },
    flag2: {
        type: String,
        required: true
    },
    team2: {
        type: String,
        required: true
    },
    stadium: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true 
    },
    time: {
        type: String,
        required: true  
    }
})

module.exports = mongoose.model('matche', matchSchema)
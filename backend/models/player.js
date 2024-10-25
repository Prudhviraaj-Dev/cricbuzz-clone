const mongoose = require('mongoose')


const playerSchema = new mongoose.Schema({
    imgURL: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    typeURL: {
        type: String,
        required: true
    },
    playertype: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    style: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('player', playerSchema)
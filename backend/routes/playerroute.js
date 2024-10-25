const express = require('express')
const router = express.Router()
const playercontroller = require ('../Controllers/playercontroller')
const player = require('../models/player')


router.post('/addPlayer', playercontroller.creatplayer)
router.get('/getPlayers', playercontroller.getplayer)
router.put('/editPlayers/:id', playercontroller.deletePlayer)
router.delete('/deletePlayers/:id', playercontroller.editPlayer)

module.exports = router
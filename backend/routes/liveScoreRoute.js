const express = require('express')
const router = express.Router()
const livescorecontroller = require ('../Controllers/livescoreController')
const liveScore = require('../models/liveScore')


router.post('/addLiveScore', livescorecontroller.creatlivescore)
router.get('/getLiveScore', livescorecontroller.getlivescore)
router.put('/editLiveScore/:id', livescorecontroller.editLiveScore)
router.delete('/deleteLiveScore/:id', livescorecontroller.deleteLiveScore)

module.exports = router
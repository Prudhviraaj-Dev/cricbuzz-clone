const express = require('express')
const router = express.Router()
const matchcontroller = require ('../Controllers/matchController')
const liveScore = require('../models/matche')


router.post('/addMatch', matchcontroller.creatmatch)
router.get('/getAllMatches', matchcontroller.getmatches)
router.put('/editmatch/:id', matchcontroller.editmatch)
router.delete('/deletematch/:id', matchcontroller.deleteMatch)

module.exports = router
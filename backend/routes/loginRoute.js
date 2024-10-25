const express = require('express')
const router = express.Router()
const logincontroller = require ('../Controllers/loginController')
const login = require('../models/login')


router.get('/getlogin', logincontroller.getLogin)
router.post('/addlogin', logincontroller.creatlogin)


module.exports = router
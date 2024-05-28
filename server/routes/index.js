const express = require('express')
const { userAdd } = require('../controller/userController')
const router = express.Router()

router.post('/v1/userAdd',userAdd)

module.exports = router
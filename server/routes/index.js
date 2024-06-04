const express = require('express')
const { userAdd, login } = require('../controller/loginController')
const { verifyToken } = require('../middleware/Auth')
const { categoryAdd } = require('../controller/categoryController')
const router = express.Router()

router.post('/v1/userAdd',userAdd)
router.post('/v1/login',login)
router.get('/',verifyToken, (req,res) => {
    res.send('hello ')
})
router.post('/v1/category/categoryAdd',verifyToken,categoryAdd)

module.exports = router
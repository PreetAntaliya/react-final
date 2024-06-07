const express = require('express')
const { userAdd, login, validateUser } = require('../controller/loginController')
const { verifyToken, isAdmin } = require('../middleware/Auth')
const { categoryAdd, categoryView } = require('../controller/categoryController')
const router = express.Router()

router.post('/v1/userAdd',userAdd)
router.post('/v1/login',login)
router.get('/',verifyToken, (req,res) => {
    res.send('hello ')
})
router.get('/v1/validateUser',verifyToken,validateUser)
router.post('/v1/category/categoryAdd',verifyToken,categoryAdd)
router.get('/v1/category/categoryView',verifyToken,categoryView)

module.exports = router
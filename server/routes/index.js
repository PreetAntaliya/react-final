const express = require('express')
const { userAdd, login, validateUser } = require('../controller/loginController')
const { verifyToken, isAdmin } = require('../middleware/Auth')
const { categoryAdd, categoryView, categoryDelete, categoryEdit } = require('../controller/categoryController')
const { productAdd, productView } = require('../controller/productController')
const multer = require('multer')
const router = express.Router()

// multer
const storage = multer.diskStorage({});
const upload = multer({ storage }).single('productImage');


router.post('/v1/userAdd',userAdd)
router.post('/v1/login',login)
router.get('/',verifyToken, (req,res) => {
    res.send('hello ')
})
router.get('/v1/validateUser',verifyToken,validateUser)

// category
router.post('/v1/category/categoryAdd',verifyToken,categoryAdd)
router.get('/v1/category/categoryView',verifyToken,categoryView)
router.put('/v1/category/categoryUpdate',verifyToken,categoryEdit)
router.delete('/v1/category/categoryDelete',verifyToken,categoryDelete)

// product
router.post('/v1/product/productAdd',verifyToken,upload,productAdd)
router.get('/v1/product/productView',verifyToken,productView)

module.exports = router
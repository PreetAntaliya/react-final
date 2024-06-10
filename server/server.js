const express = require('express')
const app = express()
const dotenv = require('dotenv')
const db = require('./config/db')
const cors = require('cors')

const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name : 'dl6dcque9',
    api_key : 712542887177796,
    api_secret : 'vvvBmXec4mlLa0mkk8Jq-BiZ7EI'

})

app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(express.json());
app.use('/',require('./routes/index'))


dotenv.config();
app.listen(process.env.PORT,(err) => {
    (err) ? console.log(err) && false : console.log('Server Stratded...'+ process.env.PORT)
})
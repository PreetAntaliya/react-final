const express = require('express')
const app = express()
const dotenv = require('dotenv')
const db = require('./config/db')
const cors = require('cors')

app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(express.json());
app.use('/',require('./routes/index'))


dotenv.config();
app.listen(process.env.PORT,(err) => {
    (err) ? console.log(err) && false : console.log('Server Stratded...'+ process.env.PORT)
})
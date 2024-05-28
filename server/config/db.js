const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://preetantaliya0067:!0067lofi@cluster0.gurd5gh.mongodb.net/final`)
const db = mongoose.connection

db.on("connected",(err) => {
    (err)? console.log(err) && false : console.log('DB connected...');
})

module.exports = db
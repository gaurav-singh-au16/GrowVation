const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors');
app.use(cors())

const loginRoute = require('./routes/login')
const galleryRoute = require('./routes/gallery')

app.use('', loginRoute)
app.use('', galleryRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log('Server Started @ 5000')
})
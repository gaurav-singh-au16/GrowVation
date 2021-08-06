const express = require('express')
const router = express.Router()
const firebase = require('firebase')
const firebaseDB = require('../util/firebase')
router.use(express.urlencoded({extended:false}))
const cors = require('cors')
router.use(express.json())

router.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

router.get('/login', async(req, res) => {
    let data = await firebase.database().ref("users/").orderByChild('username').equalTo('cipo')
    console.log(data)
    res.json({success: data})
})

router.post('/login', (req, res) => {
    
    firebase.database().ref('users/').push({
        username: req.body.username
    })
    
    res.json({success:'yes'})
})

module.exports = router
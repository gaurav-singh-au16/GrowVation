const express = require('express')
const router = express.Router()
router.use(express.urlencoded({extended:false}))

router.get('/gallery', (req, res) => {
    res.json({Success:'Gallery Page'})
})



module.exports = router
const express = require('express')
const router = express.Router()
const path = require('path')

//Router to set response for root or /index.html
router.get('^/$|/index(.html)?',(req,res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})


module.exports = router
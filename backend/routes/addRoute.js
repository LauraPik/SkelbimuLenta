const express = require('express')
const router = express.Router()

const adControler = require('../controllers/adController')
const {authToken} = require('../middleware/authToken')
const {restrictTo} = require('../middleware/restrictTo')

router.post('/', 
    authToken, adControler.addCreation
)
.get('/', 
    authToken, adControler.getAllAds
)

router.route('/:id')
.get(
    authToken, adControler.getAdById
)
module.exports = router
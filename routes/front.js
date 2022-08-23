const express = require('express')
const router = express.Router()
const frontController = require('../controllers/front')

router.get('/', frontController.getIndex) 

module.exports = router
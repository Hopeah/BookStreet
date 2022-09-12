const express = require('express')
const router = express.Router()
const frontController = require('../controllers/front')
const contactController = require('../controllers/contact')

router.get('/', frontController.getIndex) 
router.get('/contact', contactController.getContact) 

module.exports = router
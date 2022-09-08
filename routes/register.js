const express = require('express')
const router = express.Router()
const registerController = require('../controllers/register')

//Register Handle
router.post('/', registerController.getUser)

//Login Hangle
router.post('/login', registerController.getLogin)

//Logout Handle
router.get('/logout', registerController.logOut)

module.exports = router
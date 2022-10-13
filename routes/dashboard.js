const express = require('express')
const router = express.Router()
const upload = require("../middleware/multer");
const dashboardController = require('../controllers/dashboard')
const { ensureAuthenticated } = require('../config/Auth')

router.get('/', ensureAuthenticated, dashboardController.getDashboard)

router.put('/updateName', ensureAuthenticated, dashboardController.updateName)

router.put('/updateAvatar', ensureAuthenticated, upload.single("avatar"), dashboardController.updateAvatar)

router.get('/feed', dashboardController.getFeed)

router.get('/literature', dashboardController.getLiterature)

router.get('/lists', dashboardController.getLists)

router.post('/createDoc', ensureAuthenticated, upload.single("file"), dashboardController.createDoc)

router.post('/createList', ensureAuthenticated, upload.single("file"), dashboardController.createList)

module.exports = router
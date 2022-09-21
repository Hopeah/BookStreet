const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");
const { ensureAuthenticated } = require('../config/Auth')

//Post Routes - simplified for now
router.get("/list/:id", postController.getList);

module.exports = router;
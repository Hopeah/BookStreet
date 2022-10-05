const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postController = require("../controllers/post");
const { ensureAuthenticated } = require('../config/Auth')

//Post Routes - simplified for now
router.get("/:id", postController.getList);

router.put("/updateDoc/:id", ensureAuthenticated, upload.single("file"), postController.updateDoc);

router.put("/updateList/:id", ensureAuthenticated, upload.single("file"), postController.updateList);

router.delete("/deleteDoc/:id", postController.deleteDoc);

router.delete("/deleteList/:id", postController.deleteList);

module.exports = router;
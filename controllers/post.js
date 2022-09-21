const cloudinary = require("../middleware/cloudinary");
const List = require('../models/list');
const Doc = require('../models/document')

module.exports = {
    getList: async (req, res) => {
        try {
          const list = await List.findById(req.params.id);
          const docItems = await Doc.find({userId: req.user.id})
          res.render("list.ejs", { list: list, docs: docItems, user: req.user});
        } catch (err) {
          console.log(err);
        }
    },
}
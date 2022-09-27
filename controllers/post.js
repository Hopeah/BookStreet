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

    deleteList: async (req, res) => {
      try {
        // Find post by id
        let list = await List.findById({ _id: req.params.id });
        console.log(`list`)
        // Delete image from cloudinary
        if (list.cloudinaryId) {
          await cloudinary.uploader.destroy(list.cloudinaryId);
        }
        // Delete post from db
        await List.deleteOne({ _id: req.params.id });
        console.log("Deleted List");
        res.redirect('/dashboard/lists');
      } catch (err) {
        res.redirect('/dashboard/lists');
      }
    },

    deleteDoc: async (req, res) => {
      try {
        // Find post by id
        let doc = await Doc.findById({ _id: req.params.id });
        console.log(`doc`)
        // Delete image from cloudinary
        if (doc.cloudinaryId) {
          await cloudinary.uploader.destroy(doc.cloudinaryId);
        }
        // Delete post from db
        await Doc.deleteOne({ _id: req.params.id });
        console.log("Deleted Doc");
        res.redirect('/dashboard/literature');
      } catch (err) {
        res.redirect('/dashboard/literature');
      }
    },
}
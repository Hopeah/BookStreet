const cloudinary = require("../middleware/cloudinary");
const List = require('../models/list');
const Doc = require('../models/document')

module.exports = {
    getList: async (req, res) => {
        try {
          const list = await List.findById(req.params.id).populate('user').populate('documents');
          const docItems = await Doc.find({userId: req.user.id})
          res.render("list.ejs", { list: list, docs: docItems, user: req.user, avatar: req.user.avatar});
        } catch (err) {
          console.log(err);
        }
    },

    updateList: async (req,res) => {
      try {
        if (req.file) {
          // Upload image to cloudinary
          const result = await cloudinary.uploader.upload(req.file.path);
          // Find post by id
          let list = await List.findById({ _id: req.params.id });
          // Delete image from cloudinary
          if (list.cloudinaryId) {
            await cloudinary.uploader.destroy(list.cloudinaryId);
          }
          await List.findOneAndUpdate(
            { _id: req.params.id},
            {
              $set: {
                name: req.body.name,
                documents: req.body.documents,
                image: result.secure_url,
                cloudinaryId: result.public_id,
                description: req.body.description,
              }
            }
          )
        } else {
          await List.findOneAndUpdate(
            { _id: req.params.id},
            {
              $set: {
                name: req.body.name,
                documents: req.body.documents,
                description: req.body.description,
              }
            }
          )
        }
        
        console.log("Updated Library");
        res.redirect('/dashboard/lists');
      } catch (err) {
        console.log(err);
      }
    },

    updateDoc: async (req,res) => {
      try {
        if (req.file) {
          const result = await cloudinary.uploader.upload(req.file.path);
          // Find post by id
          let doc = await Doc.findById({ _id: req.params.id });
          // Delete image from cloudinary
          if (doc.cloudinaryId) {
            await cloudinary.uploader.destroy(doc.cloudinaryId);
          }
          await Doc.findOneAndUpdate(
            { _id: req.params.id},
            {
              $set: {
                title: req.body.title,
                author: req.body.author,
                genre: req.body.genre,
                link: req.body.link,
                notes: req.body.notes,
                status: req.body.status,
                rating: req.body.rating,
                image: result.secure_url,
                cloudinaryId: result.public_id,
              }
            }
          )
        } else {
          await Doc.findOneAndUpdate(
            { _id: req.params.id},
            {
              $set: {
                title: req.body.title,
                author: req.body.author,
                genre: req.body.genre,
                link: req.body.link,
                notes: req.body.notes,
                status: req.body.status,
                rating: req.body.rating,
              }
            }
          )
        }
          
        console.log("Updated Doc");
        res.redirect('/dashboard/literature');
      } catch (err) {
        console.log(err);
      }
    },

    deleteList: async (req, res) => {
      try {
        // Find post by id
        let list = await List.findById({ _id: req.params.id });
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
        console.log(req.params.id)
        // Find post by id
        let doc = await Doc.findById({ _id: req.params.id });
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
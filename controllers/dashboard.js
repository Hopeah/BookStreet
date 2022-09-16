const cloudinary = require("../middleware/cloudinary");
const doc = require('../models/document')
const list = require('../models/list')

module.exports = {
    getDashboard: async (req,res) => {
        try {
            const docItems = await doc.find({userId: req.user.id})
            const listItems = await list.find({userID: req.user.id})
            res.render('dashboard.ejs', {docs: docItems, lists: listItems, name: req.user.name})
        } catch (err) {
            console.log(err)
        }
    },

    createDoc: async (req, res) => {
        try {
            // Upload image to cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);

            await doc.create({
                title: req.body.title,
                image: result.secure_url,
                cloudinaryId: result.public_id,
                author: req.body.author,
                genre: req.body.genre,
                link: req.body.link,
                notes: req.body.notes,
                status: req.body.status,
                rating: req.body.rating
            })
            res.redirect('/dashboard')
        } catch (err) {
            console.log(err)
        }
    },

    createList: async (req, res) => {
        try {
            // Upload image to cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);

            await list.create({
                name: req.body.name,
                documents: req.body.documents,
                image: result.secure_url,
                cloudinaryId: result.public_id,
                description: req.body.description,
                user: req.user.id
            })
            res.redirect('/dashboard')
        } catch (err) {
            console.log(err)
        }
    }
}
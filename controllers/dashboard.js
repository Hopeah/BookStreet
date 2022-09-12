const doc = require('../models/document')

module.exports = {
    getDashboard: async (req,res) => {
        try {
            const docItems = await doc.find({userId: req.user.id})
            res.render('dashboard.ejs', {docs: docItems, name: req.user.name})
        } catch (err) {
            console.log(err)
        }
    },
    
    // getDashboard: (req, res)=>{
    //     res.render('dashboard.ejs', {
    //         name: req.user.name
    //     })
    // },

    createDoc: async (req, res) => {
        try {
            await doc.create({
                title: req.body.title,
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
    }
}
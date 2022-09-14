module.exports = {
    getIndex: (req, res) => {
        if (req.user) {
            return res.redirect('/dashboard')
        }
        res.render('front.ejs')
    }
}
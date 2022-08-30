module.exports = {
    getDashboard: (req, res)=>{
        res.render('dashboard.ejs', {
            name: req.user.name
        })
    }
}
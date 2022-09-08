const User = require('../models/user')
const bcrypt = require('bcryptjs')
const passport = require('passport')

module.exports = {
    getUser: (req, res) => {
        const {name, email, password, password2} = req.body;
        let errors = []
    
        //Check required fields
        if (!name || !email || !password || !password2) {
            errors.push({msg: 'Please fill in all fields'})
        }
    
        //Check passwords match
        if (password !== password2) {
            errors.push({msg: 'Passwords do not match'})
        }
    
        //Check password length
        if (password.length < 5) {
            errors.push({msg: 'Password should be at least 5 characters'})
        }
    
        //If there are any errors, re-render the page and display those
        if (errors.length > 0) {
            res.render('front', {
                errors,
                name,
                email,
                password,
                password2
            })
        } else {
            //Validation pass
            User.findOne({email: email})
                .then(user => {
                    if (user) {
                        //User exists
                        errors.push({msg: 'Email is already registered'})
                        res.render('front', {
                            errors,
                            name,
                            email,
                            password,
                            password2
                        })
                    } else {
                        const newUser = new User({
                            name,
                            email,
                            password
                        })
    
                        //Hash Password
                        bcrypt.genSalt(10, (error, salt) => 
                            bcrypt.hash(newUser.password, salt, (error, hash) => {
                                if (error) throw error;
                                //Set password to hashed 
                                newUser.password = hash;
                                //Save user
                                newUser.save()
                                    .then(user => {
                                        req.flash('success_msg', 'You are now registered!')
                                        res.redirect('/')
                                    })
                                    .catch(error => console.log(error))
                        }))
                    }
                })
        }
    },

    getLogin: (req, res, next) => {
        passport.authenticate('local', {
            successRedirect: '/dashboard',
            failureRedirect: '/',
            failureFlash: true
        })(req, res, next)
    },

    logOut: (req, res) => {
        req.logout(function(error) {
            if (error) throw error
            req.flash('success_msg', 'You are logged out')
            res.redirect('/')
        })
    }
}
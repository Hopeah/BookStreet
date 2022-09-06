const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('../models/user')

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
            //Match user
            User.findOne({email: email})
                .then(user => {
                    if (!user) {
                        //done(error, user, options)
                        return done(null, false, {message: 'That email is not registered'})
                    }

                    //Match password, user.password is a hashed password, isMatch is a Boolean
                    bcrypt.compare(password, user.password, (error, isMatch) => {
                        if (error) throw error

                        if (isMatch) {
                            return done(null, user)
                        } else {
                            return done(null, false, {message: 'Incorrect email or password'})
                        }
                    })
                })
                .catch(error => console.log(error))
        })
    )

    //Establishes and maintains a session via a cookie set in the user's browser
    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
    
    passport.deserializeUser((id, done) => {
        User.findById(id, (error, user) => {
            done(error, user);
        });
    });
}
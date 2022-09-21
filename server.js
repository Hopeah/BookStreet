const express = require('express')
const app = express()
const connectDB = require('./config/database')
const flash = require('connect-flash')
const session = require('express-session')
const methodOverride = require("method-override");
const passport = require('passport')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')

const frontRoutes = require ('./routes/front')
const registerRoutes = require('./routes/register')
const dashboardRoutes = require('./routes/dashboard')
const postRoutes = require('./routes/post')

require('dotenv').config({path: './config/.env'})
require('./config/passport')(passport);

connectDB()

//Express session
app.use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.DB_STRING })
    })
)

//Passport session
app.use(passport.initialize())
app.use(passport.session())

//Connect flash, flash + express-session allow to store flash messages in a session, and display them after a re-direct
app.use(flash())

//Global variables for flash messages
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error = req.flash('error')
    next()
})

//Middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Use forms for put / delete
app.use(methodOverride("_method"));

//Calling the routes
app.use('/', frontRoutes)
app.use('/register', registerRoutes)
app.use('/dashboard', dashboardRoutes)
app.use('/post', postRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
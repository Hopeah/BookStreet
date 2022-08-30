const express = require('express')
const app = express()
const connectDB = require('./config/database')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')

const frontRoutes = require ('./routes/front')
const contactRoutes = require ('./routes/contact')
const registerRoutes = require('./routes/register')
const dashboardRoutes = require('./routes/dashboard')

require('dotenv').config({path: './config/.env'})
require('./config/passport')(passport);

connectDB()

//Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
)

//Passport session
app.use(passport.initialize())
app.use(passport.session())

//Connect flash
app.use(flash())

//Global variables
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

//Routes
app.use('/', frontRoutes)
app.use('/contact', contactRoutes)
app.use('/register', registerRoutes)
app.use('/dashboard', dashboardRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
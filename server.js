const express = require('express')
const app = express()
const frontRoutes = require ('./routes/front')
const contactRoutes = require ('./routes/contact')
const registerRoutes = require('./routes/register')

require('dotenv').config({path: './config/.env'})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', frontRoutes)
app.use('/contact', contactRoutes)
app.use('/register', registerRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
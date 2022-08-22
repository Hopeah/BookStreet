const express = require('express')
const app = express()
const frontRoutes = require ('./routes/front')

require('dotenv').config({path: './config/.env'})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', frontRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
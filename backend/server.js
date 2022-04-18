const express = require('express')
const cors = require('cors')
const { use } = require('./routes/userRoutes')
const dotenv = require('dotenv').config()
const colors = require('colors')
const {errorHandler} = require('../backend/middleware/errorMiddleware')
const connectDB = require('../backend/config/db')
const PORT = process.env.PORT || 8000






// Connect to database
connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.json({message: 'Welcome to the Support Desk API'})
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))


app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
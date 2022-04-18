const express = require('express')
const router = express.Router()
const {getTickets, createTicket, getTicket, deleteTicket, updateTicket} = require('../routes/controllers/ticketController')

const { protect } = require('../middleware/authMe')

router.route('/').get(protect, getTickets).post(protect, createTicket)

router.route('/:id').get(protect, getTicket).delete(protect, deleteTicket).put(protect, updateTicket)

module.exports = router
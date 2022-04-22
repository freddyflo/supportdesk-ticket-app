const express = require('express')
const router = express.Router({mergeParams: true})
const { getNotes, addNote } = require('../routes/controllers/noteController')

const {protect} = require('../middleware/authMe')

router.route('/').get(protect, getNotes).post(protect, addNote)

module.exports = router
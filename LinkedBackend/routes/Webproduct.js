const express = require('express')
const { createWebProduct, getWebProducts, getWebProduct, deleteWebProduct, updateWebProduct } = require('../controllers/WebController');
const router = express.Router()

// GET all workouts
router.get('/', getWebProducts)

// GET a single workout
router.get('/:id', getWebProduct)

// POST a new workout
router.post('/', createWebProduct)

// DELETE a workout
router.delete('/:id', deleteWebProduct)

// UPDATE a workout
router.patch('/:id', updateWebProduct)

module.exports = router;
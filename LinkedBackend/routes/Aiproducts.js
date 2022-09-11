const express = require('express')
const { createAiProduct, getAiProducts, getAiProduct, deleteAiProduct, updateAiProduct } = require('../controllers/AiController');
const router = express.Router()

// GET all workouts
router.get('/', getAiProducts)

// GET a single workout
router.get('/:id', getAiProduct)

// POST a new workout
router.post('/', createAiProduct)

// DELETE a workout
router.delete('/:id', deleteAiProduct)

// UPDATE a workout
router.patch('/:id', updateAiProduct)

module.exports = router;
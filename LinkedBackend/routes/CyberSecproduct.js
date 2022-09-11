const express = require('express')
const { createCyberSecProduct, getCyberSecProducts, getCyberSecProduct, deleteCyberSecProduct, updateCyberSecProduct } = require('../controllers/CyberSecController');
const router = express.Router()

// GET all workouts
router.get('/', getCyberSecProducts)

// GET a single workout
router.get('/:id', getCyberSecProduct)

// POST a new workout
router.post('/', createCyberSecProduct)

// DELETE a workout
router.delete('/:id', deleteCyberSecProduct)

// UPDATE a workout
router.patch('/:id', updateCyberSecProduct)

module.exports = router;
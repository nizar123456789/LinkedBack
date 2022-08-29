const express = require('express')
const { createProduct, getProducts, getProduct, deleteProduct, updateProduct } = require('../controllers/productController');
const router = express.Router()

// GET all workouts
router.get('/', getProducts)

// GET a single workout
router.get('/:id', getProduct)

// POST a new workout
router.post('/', createProduct)

// DELETE a workout
router.delete('/:id', deleteProduct)

// UPDATE a workout
router.patch('/:id', updateProduct)

module.exports = router;
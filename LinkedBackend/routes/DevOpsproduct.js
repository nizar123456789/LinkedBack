const express = require('express')
const { createDevOpsProduct, getDevOpsProducts, getDevOpsProduct, deleteDevOpsProduct, updateDevOpsProduct } = require('../controllers/DevOpsController');
const router = express.Router()

// GET all workouts
router.get('/', getDevOpsProducts)

// GET a single workout
router.get('/:id', getDevOpsProduct)

// POST a new workout
router.post('/', createDevOpsProduct)

// DELETE a workout
router.delete('/:id', deleteDevOpsProduct)

// UPDATE a workout
router.patch('/:id', updateDevOpsProduct)

module.exports = router;
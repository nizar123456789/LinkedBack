const Product = require('../models/productModel');
const mongoose = require('mongoose');

//get all workouts 
const getProducts = async(req, res) => {
    const products = await Product.find({}).sort({ createdAt: -1 })
    res.status(200).json(products)
}



//get a single workout
const getProduct = async(req, res) => {


    const { id } = req.params


    if (!mongoose.Types.ObjectId.isValid()) {

        res.status(404).json({ error: 'NO Such Workout' })
    }
    const product = await Product.findById(id)

    if (!product) {
        res.status(404).json({ error: 'No such Workout' })
    }

    res.status(200).json(product)
}

//create a single workout 

const createProduct = async(req, res) => {


    const { title, category, body } = req.body
        // add doc to db
    try {
        const product = await Product.create({ title, category, body })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//delete a workout 
const deleteProduct = async(req, res) => {
    const { id } = req.params


    if (!mongoose.Types.ObjectId.isValid()) {

        res.status(404).json({ error: 'NO Such Workout' })
    }
    const product = await Product.findOne({ _id: id })


    if (!product) {
        res.status(404).json({
            error: 'No such workout'
        })
    }
    res.status(200).json(product)
}


//update a workout

const updateProduct = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid()) {

        res.status(404).json({ error: 'NO Such Workout' })
    }
    const product = await Product.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!product) {
        res.status(404).json({ error: 'No such workout' })
    }
    res.status(200).json(product)

}



module.exports = {


    getProducts,


    getProduct,
    createProduct,
    deleteProduct,
    updateProduct


}
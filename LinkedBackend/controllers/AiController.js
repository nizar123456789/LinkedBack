const AiProduct = require('../models/AiModel');
const mongoose = require('mongoose');

//get all offers 
const getAiProducts = async(req, res) => {
    const products = await AiProduct.find({}).sort({ createdAt: -1 })
    res.status(200).json(products)
}



//get a single offer
const getAiProduct = async(req, res) => {


    const { id } = req.params


    if (!mongoose.Types.ObjectId.isValid()) {

        res.status(404).json({ error: 'NO Such product' })
    }
    const product = await AiProduct.findById(id)

    if (!product) {
        res.status(404).json({ error: 'No such product' })
    }

    res.status(200).json(product)
}

//create a single offer 

const createAiProduct = async(req, res) => {


    const { title, Company, location, date, tasks, requirements, applied, Type, aboutCompany } = req.body
        // add doc to db
    try {
        const product = await AiProduct.create({ title, Company, location, date, tasks, requirements, applied, Type, aboutCompany })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//delete a offer 
const deleteAiProduct = async(req, res) => {
    const { id } = req.params


    if (!mongoose.Types.ObjectId.isValid()) {

        res.status(404).json({ error: 'NO Such product' })
    }
    const product = await AiProduct.findOne({ _id: id })


    if (!product) {
        res.status(404).json({
            error: 'No such product'
        })
    }
    res.status(200).json(product)
}


//update a offer

const updateAiProduct = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid()) {

        res.status(404).json({ error: 'NO Such product' })
    }
    const product = await AiProduct.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!product) {
        res.status(404).json({ error: 'No such product' })
    }
    res.status(200).json(product)

}



module.exports = {


    getAiProducts,


    getAiProduct,
    createAiProduct,
    deleteAiProduct,
    updateAiProduct


}
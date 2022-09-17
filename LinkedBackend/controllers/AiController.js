const AiProduct = require('../models/AiModel');
const mongoose = require('mongoose');

//get all offers 
const getAiProducts = async(req, res) => {
    const products = await AiProduct.find({}).sort({ createdAt: -1 })
    res.status(200).json(products)
}



//get a single offer
const getAiProduct = async(req, res) => {


    try {
        const product = await AiProduct.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }

}

//create a single offer 

const createAiProduct = async(req, res) => {


    const { title, category, body } = req.body
        // add doc to db
    try {
        const product = await AiProduct.create({ title, category, body })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//delete a offer 
const deleteAiProduct = async(req, res) => {
    try {
        await AiProduct.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
}


//update a offer

const updateAiProduct = async(req, res) => {
    try {
        const updatedAiProduct = await AiProduct.findByIdAndUpdate(
            req.params.id, {
                $set: req.body,
            }, { new: true }
        );
        res.status(200).json(updatedAiProduct);
    } catch (err) {
        res.status(500).json(err);
    }

}



module.exports = {


    getAiProducts,


    getAiProduct,
    createAiProduct,
    deleteAiProduct,
    updateAiProduct


}
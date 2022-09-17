const CyberSecProduct = require('../models/CyberSecModel')
const mongoose = require('mongoose');

//get all offers 
const getCyberSecProducts = async(req, res) => {
    const CyberProducts = await CyberSecProduct.find({}).sort({ createdAt: -1 })
    res.status(200).json(CyberProducts)
}



//get a single offer
const getCyberSecProduct = async(req, res) => {


    try {
        const CyberProduct = await CyberSecProduct.findById(req.params.id);
        res.status(200).json(CyberProduct);
    } catch (err) {
        res.status(500).json(err);
    }
}

//create a single offer 

const createCyberSecProduct = async(req, res) => {


    const { title, category, body } = req.body
        // add doc to db
    try {
        const CyberProduct = await CyberSecProduct.create({ title, category, body })
        res.status(200).json(CyberProduct)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//delete a offer 
const deleteCyberSecProduct = async(req, res) => {
    try {
        await CyberSecProduct.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
}


//update a offer

const updateCyberSecProduct = async(req, res) => {
    try {
        const updatedCyberSecProduct = await CyberSecProduct.findByIdAndUpdate(
            req.params.id, {
                $set: req.body,
            }, { new: true }
        );
        res.status(200).json(updatedCyberSecProduct);
    } catch (err) {
        res.status(500).json(err);
    }


}



module.exports = {


    getCyberSecProducts,


    getCyberSecProduct,
    createCyberSecProduct,
    deleteCyberSecProduct,
    updateCyberSecProduct


}
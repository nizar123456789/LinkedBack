const DevOpsProduct = require('../models/DevOpsModel');
const mongoose = require('mongoose');

//get all offers 
const getDevOpsProducts = async(req, res) => {
    const DevopsProducts = await DevOpsProduct.find({}).sort({ createdAt: -1 })
    res.status(200).json(DevopsProducts)
}



//get a single offer
const getDevOpsProduct = async(req, res) => {


    try {
        const DevopsProduct = await DevOpsProduct.findById(req.params.id);
        res.status(200).json(DevopsProduct);
    } catch (err) {
        res.status(500).json(err);
    }
}

//create a single offer 

const createDevOpsProduct = async(req, res) => {


    const { title, category, body } = req.body
        // add doc to db
    try {
        const DevopsProduct = await DevOpsProduct.create({ title, category, body })
        res.status(200).json(DevopsProduct)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//delete a offer 
const deleteDevOpsProduct = async(req, res) => {
    try {
        await DevOpsProduct.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
}


//update a offer

const updateDevOpsProduct = async(req, res) => {
    try {
        const updatedDevOpsProduct = await DevOpsProduct.findByIdAndUpdate(
            req.params.id, {
                $set: req.body,
            }, { new: true }
        );
        res.status(200).json(updatedDevOpsProduct);
    } catch (err) {
        res.status(500).json(err);
    }

}



module.exports = {


    getDevOpsProducts,


    getDevOpsProduct,
    createDevOpsProduct,
    deleteDevOpsProduct,
    updateDevOpsProduct


}
const WebProduct = require('../models/WebModel')
const mongoose = require('mongoose');

//get all offers 
const getWebProducts = async(req, res) => {
    const Webproducts = await WebProduct.find({}).sort({ createdAt: -1 })
    res.status(200).json(Webproducts)
}



//get a single offer
const getWebProduct = async(req, res) => {


    try {
        const Webproduct = await WebProduct.findById(req.params.id);
        res.status(200).json(Webproduct);
    } catch (err) {
        res.status(500).json(err);
    }
}

//create a single offer 

const createWebProduct = async(req, res) => {


    const { title, category, body } = req.body
        // add doc to db
    try {
        const Webproduct = await WebProduct.create({ title, category, body })
        res.status(200).json(Webproduct)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//delete a offer 
const deleteWebProduct = async(req, res) => {
    try {
        await WebProduct.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
}


//update a offer

const updateWebProduct = async(req, res) => {
    try {
        const updatedwebProduct = await WebProduct.findByIdAndUpdate(
            req.params.id, {
                $set: req.body,
            }, { new: true }
        );
        res.status(200).json(updatedwebProduct);
    } catch (err) {
        res.status(500).json(err);
    }

}



module.exports = {


    getWebProducts,


    getWebProduct,
    createWebProduct,
    deleteWebProduct,
    updateWebProduct


}
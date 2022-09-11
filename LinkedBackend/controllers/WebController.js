const WebProduct = require('../models/WebModel')
const mongoose = require('mongoose');

//get all offers 
const getWebProducts = async(req, res) => {
    const WebProducts = await WebProduct.find({}).sort({ createdAt: -1 })
    res.status(200).json(WebProducts)
}



//get a single offer
const getWebProduct = async(req, res) => {


    const { id } = req.params


    if (!mongoose.Types.ObjectId.isValid()) {

        res.status(404).json({ error: 'NO Such product' })
    }
    const WebProduct = await WebProduct.findById(id)

    if (!WebProduct) {
        res.status(404).json({ error: 'No such product' })
    }

    res.status(200).json(WebProduct)
}

//create a single offer 

const createWebProduct = async(req, res) => {


    const { title, Company, location, date, tasks, requirements, applied, Type, aboutCompany } = req.body
        // add doc to db
    try {
        const WebProduct = await WebProduct.create({ title, Company, location, date, tasks, requirements, applied, Type, aboutCompany })
        res.status(200).json(WebProduct)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//delete a offer 
const deleteWebProduct = async(req, res) => {
    const { id } = req.params


    if (!mongoose.Types.ObjectId.isValid()) {

        res.status(404).json({ error: 'NO Such product' })
    }
    const WebProduct = await WebProduct.findOne({ _id: id })


    if (!WebProduct) {
        res.status(404).json({
            error: 'No such product'
        })
    }
    res.status(200).json(WebProduct)
}


//update a offer

const updateWebProduct = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid()) {

        res.status(404).json({ error: 'NO Such product' })
    }
    const WebProduct = await WebProduct.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!WebProduct) {
        res.status(404).json({ error: 'No such product' })
    }
    res.status(200).json(WebProduct)

}



module.exports = {


    getWebProducts,


    getWebProduct,
    createWebProduct,
    deleteWebProduct,
    updateWebProduct


}
const DevOpsProduct = require('../models/DevOpsModel');
const mongoose = require('mongoose');

//get all offers 
const getDevOpsProducts = async(req, res) => {
    const DevOpsProducts = await DevOpsProduct.find({}).sort({ createdAt: -1 })
    res.status(200).json(DevOpsProducts)
}



//get a single offer
const getDevOpsProduct = async(req, res) => {


    const { id } = req.params


    if (!mongoose.Types.ObjectId.isValid()) {

        res.status(404).json({ error: 'NO Such product' })
    }
    const DevOpsProduct = await DevOpsProduct.findById(id)

    if (!DevOpsProduct) {
        res.status(404).json({ error: 'No such product' })
    }

    res.status(200).json(DevOpsProduct)
}

//create a single offer 

const createDevOpsProduct = async(req, res) => {


    const { title, Company, location, date, tasks, requirements, applied, Type, aboutCompany } = req.body
        // add doc to db
    try {
        const DevOpsProduct = await DevOpsProduct.create({ title, Company, location, date, tasks, requirements, applied, Type, aboutCompany })
        res.status(200).json(DevOpsProduct)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//delete a offer 
const deleteDevOpsProduct = async(req, res) => {
    const { id } = req.params


    if (!mongoose.Types.ObjectId.isValid()) {

        res.status(404).json({ error: 'NO Such product' })
    }
    const DevOpsProduct = await DevOpsProduct.findOne({ _id: id })


    if (!DevOpsProduct) {
        res.status(404).json({
            error: 'No such product'
        })
    }
    res.status(200).json(DevOpsProduct)
}


//update a offer

const updateDevOpsProduct = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid()) {

        res.status(404).json({ error: 'NO Such product' })
    }
    const DevOpsProduct = await DevOpsProduct.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!DevOpsProduct) {
        res.status(404).json({ error: 'No such product' })
    }
    res.status(200).json(DevOpsProduct)

}



module.exports = {


    getDevOpsProducts,


    getDevOpsProduct,
    createDevOpsProduct,
    deleteDevOpsProduct,
    updateDevOpsProduct


}
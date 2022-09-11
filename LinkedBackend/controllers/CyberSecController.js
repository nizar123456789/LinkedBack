const CyberSecProduct = require('../models/CyberSecModel')
const mongoose = require('mongoose');

//get all offers 
const getCyberSecProducts = async(req, res) => {
    const CyberProducts = await CyberSecProduct.find({}).sort({ createdAt: -1 })
    res.status(200).json(CyberProducts)
}



//get a single offer
const getCyberSecProduct = async(req, res) => {


    const { id } = req.params


    if (!mongoose.Types.ObjectId.isValid()) {

        res.status(404).json({ error: 'NO Such product' })
    }
    const CyberProduct = await CyberSecProduct.findById(id)

    if (!CyberProduct) {
        res.status(404).json({ error: 'No such product' })
    }

    res.status(200).json(CyberProduct)
}

//create a single offer 

const createCyberSecProduct = async(req, res) => {


    const { title, Company, location, date, tasks, requirements, applied, Type, aboutCompany } = req.body
        // add doc to db
    try {
        const CyberProduct = await CyberSecProduct.create({ title, Company, location, date, tasks, requirements, applied, Type, aboutCompany })
        res.status(200).json(CyberProduct)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//delete a offer 
const deleteCyberSecProduct = async(req, res) => {
    const { id } = req.params


    if (!mongoose.Types.ObjectId.isValid()) {

        res.status(404).json({ error: 'NO Such product' })
    }
    const CyberProduct = await CyberSecProduct.findOne({ _id: id })


    if (!CyberProduct) {
        res.status(404).json({
            error: 'No such product'
        })
    }
    res.status(200).json(CyberProduct)
}


//update a offer

const updateCyberSecProduct = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid()) {

        res.status(404).json({ error: 'NO Such product' })
    }
    const CyberProduct = await CyberSecProduct.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!CyberProduct) {
        res.status(404).json({ error: 'No such product' })
    }
    res.status(200).json(CyberProduct)

}



module.exports = {


    getCyberSecProducts,


    getCyberSecProduct,
    createCyberSecProduct,
    deleteCyberSecProduct,
    updateCyberSecProduct


}
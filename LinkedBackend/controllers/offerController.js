const Offer = require('../models/offerModel');
const mongoose = require('mongoose');

//get all offers 
const getOffers = async(req, res) => {
    const offers = await Offer.find({}).sort({ createdAt: -1 })
    res.status(200).json(offers)
}



//get a single offer
const getOffer = async(req, res) => {


    try {
        const offer = await Offer.findById(req.params.id);
        res.status(200).json(offer);
    } catch (err) {
        res.status(500).json(err);
    }
}

//create a single offer 

const createOffer = async(req, res) => {


    const { title, Company, location, date, tasks, requirements, applied, Type, aboutCompany } = req.body
        // add doc to db
    try {
        const offer = await Offer.create({ title, Company, location, date, tasks, requirements, applied, Type, aboutCompany })
        res.status(200).json(offer)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//delete a workout 
const deleteOffer = async(req, res) => {
    try {
        await Offer.findByIdAndDelete(req.params.id);
        res.status(200).json("offer has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
}


//update a offer

const updateOffer = async(req, res) => {
    try {
        const updatedOffer = await Offer.findByIdAndUpdate(
            req.params.id, {
                $set: req.body,
            }, { new: true }
        );
        res.status(200).json(updatedOffer);
    } catch (err) {
        res.status(500).json(err);
    }

}



module.exports = {


    getOffers,


    getOffer,
    createOffer,
    deleteOffer,
    updateOffer


}
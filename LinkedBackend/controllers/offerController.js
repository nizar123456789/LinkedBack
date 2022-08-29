const Offer = require('../models/offerModel');
const mongoose = require('mongoose');

//get all workouts 
const getOffers = async(req, res) => {
    const offers = await Offer.find({}).sort({ createdAt: -1 })
    res.status(200).json(offers)
}



//get a single workout
const getOffer = async(req, res) => {


    const { id } = req.params


    if (!mongoose.Types.ObjectId.isValid()) {

        res.status(404).json({ error: 'NO Such Workout' })
    }
    const offer = await Offer.findById(id)

    if (!offer) {
        res.status(404).json({ error: 'No such Workout' })
    }

    res.status(200).json(offer)
}

//create a single workout 

const createOffer = async(req, res) => {


    const { title, category, body } = req.body
        // add doc to db
    try {
        const offer = await Offer.create({ title, category, body })
        res.status(200).json(offer)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//delete a workout 
const deleteOffer = async(req, res) => {
    const { id } = req.params


    if (!mongoose.Types.ObjectId.isValid()) {

        res.status(404).json({ error: 'NO Such Workout' })
    }
    const offer = await Offer.findOne({ _id: id })


    if (!offer) {
        res.status(404).json({
            error: 'No such workout'
        })
    }
    res.status(200).json(offer)
}


//update a workout

const updateOffer = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid()) {

        res.status(404).json({ error: 'NO Such Workout' })
    }
    const offer = await Offer.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!offer) {
        res.status(404).json({ error: 'No such workout' })
    }
    res.status(200).json(offer)

}



module.exports = {


    getOffers,


    getOffer,
    createOffer,
    deleteOffer,
    updateOffer


}
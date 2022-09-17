const mongoose = require('mongoose')

const Schema = mongoose.Schema

const offerSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    Company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },
    tasks: {
        type: [String],
        required: true
    },
    requirements: {
        type: [String],
        required: true
    },
    applied: {
        type: Number,
        required: true
    },
    Type: {
        type: String,
        require: true
    },
    aboutCompany: {
        type: String,
        require: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Offer', offerSchema)
const express = require('express')
const mongoose = require('mongoose')
const offerRoutes = require('./routes/offers')
const productRoutes = require('./routes/products')

const dbURI = 'mongodb+srv://nizarkarkar:test1234@mernstack.utxuidk.mongodb.net/?retryWrites=true&w=majority'
    // express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/offers', offerRoutes);
app.use('/api/products', productRoutes);

// connect to db
mongoose.connect(dbURI)
    .then(() => {
        console.log('connected to database')
            // listen to port
        app.listen(3000, () => {
            console.log('listening for requests on port 4000')
        })
    })
    .catch((err) => {
        console.log(err)
    })
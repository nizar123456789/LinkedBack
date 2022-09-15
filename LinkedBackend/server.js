const express = require('express');
const mongoose = require('mongoose');
const offerRoutes = require('./routes/offers');
const AiproductRoutes = require('./routes/Aiproducts');
const CyberSecRoutes = require('./routes/CyberSecproduct');
const DevOpsRoutes = require('./routes/DevOpsproduct');
const WebRoutes = require('./routes/Webproduct');
//const bcrypt = require('bcrypt');
const userRoutes = require('./routes/userRoutes');

const { errorHandler, notFound } = require("./middleware/errorMiddlware");

require('dotenv').config();



//const jwt = require('jsonwebtoken');

const dbURI = 'mongodb+srv://nizarkarkar:test1234@mernstack.utxuidk.mongodb.net/?retryWrites=true&w=majority'
    // express app
const app = express()
app.use(express.json())


// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/offers', offerRoutes);
app.use('/api/Ai', AiproductRoutes);
app.use('/api/CyberSec', CyberSecRoutes);
app.use('/api/devops', DevOpsRoutes)

app.use('/api/web', WebRoutes);
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler)
    //error  middelware

//app.use(notFound);
//app.use(errorHandler);

// connect to db
mongoose.connect(dbURI)
    .then(() => {
        console.log('connected to database')
            // listen to port
        app.listen(3000, () => {
            console.log('listening for requests on port 3000')
        })
    })
    .catch((err) => {
        console.log(err)
    })
'use strict';
// Load the module dependencies
const config = require('./config'),
    mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {
    // Use Mongoose to connect to MongoDB
    const db = mongoose.connect(config.db, { useMongoClient: true });

    // Load the MongoDb model
    require('./models')();
    // Return the Mongoose connection instance
    return db;
};
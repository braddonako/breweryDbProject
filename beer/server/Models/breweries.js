const mongoose = require('mongoose');

const breweriesSchema = mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    description: {
        type: String
    },
    website: {
        required: true,
        type: String
    }
})

const Breweries = mongoose.model('Breweries', breweriesSchema);
module.exports = {Breweries}
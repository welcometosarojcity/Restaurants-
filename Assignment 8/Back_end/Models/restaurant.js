const mongoose = require('mongoose');

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the City Schema
const ResSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    location_id : {
        type: Number,
        required: true
    },
    cuisine_id : {
        type: Number,
        required: true
    },
    mealtype_id:{
        type: Number,
        required: true 
    },
    min_price:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('restaurants', ResSchema, 'restaurants');   // exporting the model
const Constants = require('../constants');
const mongoose = require('mongoose');
require('./reviews.model');
mongoose.Promise = global.Promise;
mongoose.connect(Constants.mongo.uri, {
    useMongoClient: true
});

const Schema = mongoose.Schema;
const LocationSchema = new Schema({

    title: String,
    type: String,
    generalDesc: String,
    guestAccess: String,
    price: Number,
    currency: String,
    amenities: [{
        type: String
    }],
    imageUrl: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    address: {
        country: String,
        city: String,
        street: String,
        number: Number,
        lat: Number,
        lng: Number
    },
    theSpace: {
        description: String,
        guests: Number,
        beds: Number,
        bedrooms: Number
    }
}, { toJSON: { virtuals: true } });

LocationSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'locationId'
});

LocationSchema.virtual('homeOwner', {
    ref: 'User',
    localField: 'owner',
    foreignField: '_id',
    justOne: true
});

LocationSchema.methods = {}

const LocationModel = mongoose.model('Location', LocationSchema);

async function getLocations() {
    let allLocations = await LocationModel.find({}, {imageUrl: 1, theSpace: 1, title: 1, type: 1, price: 1, address: 1});
    return allLocations;
}

async function getLocationById(locationId) {
    let foundLocation = await LocationModel.findOne({
        _id: locationId
    }).populate({path: 'reviews', populate: {path: 'reviewer', select: ['first', 'last', 'picture']}})
    .populate({path: 'homeOwner', select: ['first', 'last', 'picture']});
    return foundLocation;
}

module.exports = {
    getLocations,
    getLocationById
};


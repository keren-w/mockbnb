const Constants = require('../constants')
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
mongoose.connect(Constants.mongo.uri, {
    useMongoClient: true
});

const Schema = mongoose.Schema;
const ReviewsSchema = new Schema({
    title: String,
    content: String,
    rating: Number,
    date: Date,
    userId: Schema.Types.ObjectId,
    locationId: Schema.Types.ObjectId
}, { toJSON: { virtuals: true } });

ReviewsSchema.virtual('reviewer', {
    ref: 'User',
    localField: 'userId',
    foreignField: '_id',
    justOne: true
});

ReviewsSchema.methods = {}

const ReviewsModel = mongoose.model('Review', ReviewsSchema);

module.exports = {};


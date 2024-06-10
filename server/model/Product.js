const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productDiscription: {
        type: String,
        required: true
    },
    productOfferPrice: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    },
    productStatus: {
        type: Number,
        default : 1,
        required: true
    },
    productImage : {
        type: String,
        required: true
    },
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    ImagesPubligId : {
        type : String,
        required : true,
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

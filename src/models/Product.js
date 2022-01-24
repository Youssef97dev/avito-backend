const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const Product = mongoose.model("Products", ProductSchema);
module.exports = Product;
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    numberProduct: {
        type: Number,
        required: true,
    },
});

const Category = mongoose.model("Categories", CategorySchema);
module.exports = Category;
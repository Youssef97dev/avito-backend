// Categories Controller
const { 
    createCategory, 
    getCategory, 
    updateCategory, 
    deleteCategory,
    getAllCategories,
} = require('./categoryController');

module.exports = {
    createCategory,
    updateCategory,
    getCategory,
    getAllCategories,
    deleteCategory,
};
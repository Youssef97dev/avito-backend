// Models
const Category = require('../models/category');

exports.createCategory = (req, res) => {
    const category = new Category(req.body);
    category.save((error, category) => {
        if(error) {
            return res.status(400).json({
                error: error.message,
            });
        };
        res.json(category);
    });
};

exports.updateCategory = (req, res) => {
    const category = {
        name: req.body.name,
        numberProduct: req.body.numberProduct,
    };
    Category.findByIdAndUpdate(req.params.id, {$set:category},{new:true}, (err,data) => {
        if(!err){
            res.status(200).json({code:200, message: 'Category Updated Successfully',addCategory:data});
        }else{
            console.log(err);
        }
    });
};

exports.getAllCategories = async(req, res) => {


    const query = Category.find({});

    query.exec(function (error, categories) {
        if(error) {
            return res.status(400).json({
                error: error.message,
            });
        };
        res.json({
            categories,
        });
    });
};

exports.getCategory = (req, res) => {

    const { categoryId } = req.params;

    Category.findById(categoryId).exec((error, category) => {
        if(error || !category) {
            return res.status(404).json({
                error: "Category not found."
            });
        };
        res.json(category);
    });
};

exports.deleteCategory = (req, res) => {
    const { categoryId } = req.params;
    Category.findOneAndRemove(categoryId).exec((error, category) => {
        if(error || !category) {
            return res.status(404).json({
                error: "Category not found."
            });
        };
        res.status(204).json({});
    });
};
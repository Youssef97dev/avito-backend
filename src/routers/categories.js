const express = require('express');
const router = express.Router();

// Controllers
const { createCategory, getAllCategories, getCategory, updateCategory, deleteCategory } = require('../controllers');

router.get('/', getAllCategories);
router.get('/:categoryId', getCategory);
router.post('/add', createCategory);
router.put('/update/:categoryId',  updateCategory);
router.delete('/delete/:categoryId', deleteCategory);

module.exports = router;
const express = require('express');
const router = express.Router();
const {authToken} = require('../middleware/authToken');
const {restrictTo} = require('../middleware/restrictTo');
const categoryController = require('../controllers/categoryController');


router.post('/', 
    authToken, restrictTo('admin'), categoryController.createCategory
)
.get('/', 
    authToken, categoryController.getAllCategories)

router.route('/:id')
.delete( 
    authToken,  restrictTo('admin'), categoryController.deleteCategoryById
)
.get(
    authToken, restrictTo('admin'), categoryController.getCategoryById
)

module.exports = router
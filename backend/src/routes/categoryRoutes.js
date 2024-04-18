import express from "express";
const router = express.Router();
import categoryController from '../controllers/categoryController';

// Định nghĩa các route
router.get('/special', categoryController.getSpecialCategoriesByPaginate);
router.get('/', categoryController.getAllCategories);
router.post('/', categoryController.createCategory);
router.get('/manufacturer', categoryController.getCategoriesByManufacturer);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', categoryController.updateCategory);

router.delete('/:id', categoryController.deleteCategory);
router.post('/search', categoryController.handleSearchCategories);

module.exports = router;
import express from "express";
const router = express.Router();
import productController from '../controllers/productController';

// Định nghĩa các route
router.get('/', productController.getAllProducts);
// router.post('/', productController.createProduct);
// router.put('/:id', productController.updateProduct);
// router.delete('/:id', productController.deleteProduct);

module.exports = router;

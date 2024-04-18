import express from 'express';
const router = express.Router();
import billController from '../controllers/billController';

// Định nghĩa các route
router.post('/', billController.createBill);
router.get('/', billController.getBills);
// router.put('/:id', billController.updateBill);
// router.delete('/:id', billController.deleteBill);

module.exports = router;

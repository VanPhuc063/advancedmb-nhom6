import express from "express";
const router = express.Router();
import manufacturerController from '../controllers/manufacturerController';

router.get('/', manufacturerController.getAllManufacturers);
router.post('/', manufacturerController.createManufacturer);

module.exports = router;

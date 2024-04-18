import express from "express";
const router = express.Router();
import userController from '../controllers/userController';

// Định nghĩa các route
router.post('/register', userController.handleRegister);
router.post('/login', userController.handleLogin);
// router.post('/', userController.createUser);
// router.put('/:id', userController.updateUser);
// router.delete('/:id', userController.deleteUser);

module.exports = router;

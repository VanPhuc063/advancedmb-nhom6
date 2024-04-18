const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

// Định nghĩa các route
router.post('/', groupController.createGroup);
router.put('/:id', groupController.updateGroup);
router.delete('/:id', groupController.deleteGroup);

module.exports = router;

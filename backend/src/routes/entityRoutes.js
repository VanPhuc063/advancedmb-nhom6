// routes/entityRoutes.js
const express = require('express');
const router = express.Router();
const Entity = require('../models/entityModel');

// Định nghĩa route để lấy tất cả entities
router.get('/', async (req, res) => {
    try {
        const entities = await Entity.find();
        res.json(entities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Định nghĩa route để tạo một entity mới
router.post('/', async (req, res) => {
    const entity = new Entity({
        fieldName: req.body.fieldName,
        // Thêm các trường khác nếu cần
    });

    try {
        const newEntity = await entity.save();
        res.status(201).json(newEntity);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

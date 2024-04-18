import mongoose from 'mongoose';

const manufacturerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String },
});

module.exports = mongoose.model('Manufacturer', manufacturerSchema);

import mongoose from 'mongoose';

const billSchema = new mongoose.Schema({
    totalPrice: { type: Number, required: true },
    saleDate: { type: Date, default: Date.now, required: true },
    user: {
        _id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        fullname: { type: String },
        phone: {type: String},
        address: { type: String }
    },
    paymentType: { type: String, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model('Bill', billSchema);

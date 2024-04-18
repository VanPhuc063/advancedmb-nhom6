import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discountedPrice: { type: Number },
    specialProduct: { type: Boolean },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    manufactureDate: { type: Date }
});

module.exports = mongoose.model('Product', productSchema);

import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    storageCapacity: { type: String }, // Dung lượng
    ram: { type: String }, // RAM
    chipset: { type: String }, // Chip
    display: { type: String }, // Màn hình
    price: { type: Number },
    discountPrice: { type: Number }, // Giá khuyến mãi cho toàn bộ danh mục
    specialProduct: { type: Boolean },
    manufacturer: { type: String }
});

// Tạo chỉ mục văn bản toàn văn cho các trường cần tìm kiếm
categorySchema.index({
    name: 'text',
    description: 'text',
    storageCapacity: 'text',
    ram: 'text',
    chipset: 'text',
    display: 'text',
    manufacturer: 'text'
});

module.exports = mongoose.model('Category', categorySchema);

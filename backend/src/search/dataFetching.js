import Category from '../models/categorySchema';

const getAllCategories = async () => {
    try {
        // Lấy toàn bộ danh sách các danh mục từ cơ sở dữ liệu
        const categories = await Category.find({}, { image: 0 }); // Loại bỏ thuộc tính image

        return categories;
    } catch (error) {
        console.error('Error getting categories:', error);
        return [];
    }
};

export { getAllCategories };

import Category from '../models/categorySchema';

const getAllCategories = async (page, limit) => {
    try {
        const skip = (page - 1) * limit;
        const categories = await Category.find().skip(skip).limit(limit);
        const totalCategories = await Category.countDocuments();
        const totalPages = Math.ceil(totalCategories / limit);
        return { 
            EM: 'Get all categories successfully', 
            EC: 0, 
            DT: { categories, totalPages } 
        };
    } catch (error) {
        console.error('Error getting categories:', error);
        return { EM: 'Internal server error', EC: -1, DT: null };
    }
};

const createCategory = async (categoryData) => {
    try {
        const newCategory = new Category(categoryData);
        await newCategory.save();
        return ({ 
            EM: 'Create category successfully', 
            EC: 0, 
            DT: newCategory 
        });
    } catch (error) {
        console.error('Error creating category:', error);
        return ({ 
            EM: 'Internal server error',
            EC: -1, 
            DT: null 
        });
    }
};

const getCategoryById = async (categoryId) => {
    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            return {
                EM: 'Category not found',
                EC: 404,
                DT: null
            };
        }
        return { 
            EM: 'Get category by id success!',
            EC: 0, 
            DT: category 
        };
    } catch (error) {
        console.error('Error getting category by id:', error);
        return { 
            EM: 'Internal server error',
            EC: -1, 
            DT: null 
        };
    }
};

const updateCategory = async (categoryId, updatedCategoryData) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(categoryId, updatedCategoryData, { new: true });
        if (!updatedCategory) {
            return { 
                EM: 'Category not found', 
                EC: -1, 
                DT: null 
            };
        }
        return { 
            EM: 'Category updated successfully', 
            EC: 0, 
            DT: updatedCategory 
        };
    } catch (error) {
        console.error('Error updating category in service:', error);
        return { 
            EM: 'Error from server', 
            EC: -1, 
            DT: null 
        };
    }
};

const getCategoryDetails = async (categoryIds, confidences) => {
    try {
        // Lấy danh sách đầy đủ của các danh mục dựa trên ID
        const categories = await Category.find({ _id: { $in: categoryIds } });

        // Bổ sung thuộc tính confidence vào mỗi danh mục
        const categoriesWithConfidence = categories.map((category, index) => ({
            ...category.toObject(),
            confidence: confidences[index]
        }));

        return categoriesWithConfidence;
    } catch (error) {
        console.error('Error getting category details:', error);
        return [];
    }
};

const getCategoriesByManufacturer = async (manufacturer, page, limit ) => {
    try {
        const skip = (page - 1) * limit;
        const categories = await Category.find({ manufacturer: manufacturer }).skip(skip).limit(limit);
        const totalCategories = await Category.countDocuments({ manufacturer: manufacturer });
        const totalPages = Math.ceil(totalCategories / limit);
        return { 
            EM: 'Get all categories by manufacturer successfully', 
            EC: 0, 
            DT: { categories, totalPages } 
        };
    } catch (error) {
        console.error('Error getting categories:', error);
        return { EM: 'Internal server error', EC: -1, DT: null };
    }
};

const searchCategories = async (keyword, page, limit) => {
    try {
        const skip = (page - 1) * limit;
        // Tìm kiếm các trường có chứa từ khóa tìm kiếm, với phân trang
        const categories = await Category.find({
            $text: { $search: keyword }
        }).skip(skip).limit(limit);
        const totalCategories = await Category.countDocuments({
            $text: { $search: keyword }
        });
        const totalPages = Math.ceil(totalCategories / limit);
        return { 
            EM: 'Search categories successfully', 
            EC: 0, 
            DT: { categories, totalPages, totalCategories } 
        };
    } catch (error) {
        console.error('Error searching categories:', error);
        return { 
            EM: 'Internal server error', 
            EC: -1, 
            DT: null 
        };
    }
};

const deleteCategory = async (categoryId) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(categoryId);
        if (!deletedCategory) {
            return {
                EM: 'Category not found',
                EC: 404,
                DT: null
            };
        }
        return {
            EM: 'Category deleted successfully',
            EC: 0,
            DT: null
        };
    } catch (error) {
        console.error('Error deleting category in service:', error);
        return {
            EM: 'Internal server error',
            EC: -1,
            DT: null
        };
    }
};

const getSpecialCategoriesByPaginate = async (page, limit) => {
    try {
        const skip = (page - 1) * limit;
        const specialCategories = await Category.find({ specialProduct: true }).skip(skip).limit(limit);
        const totalSpecialCategories = await Category.countDocuments({ specialProduct: true });
        const totalPages = Math.ceil(totalSpecialCategories / limit);
        return { 
            EM: 'Get special categories successfully', 
            EC: 0, 
            DT: { specialCategories, totalPages } 
        };
    } catch (error) {
        console.error('Error getting special categories:', error);
        return { EM: 'Internal server error', EC: -1, DT: null };
    }
};

module.exports = {
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    getCategoryDetails,
    getCategoriesByManufacturer,
    searchCategories,
    deleteCategory,
    getSpecialCategoriesByPaginate
};

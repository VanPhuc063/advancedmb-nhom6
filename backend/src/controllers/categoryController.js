import categoryService from '../services/categoryService';

const getAllCategories = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const data = await categoryService.getAllCategories(parseInt(page), parseInt(limit));
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        });
    } catch (error) {
        console.error('Error getting categories:', error);
        return res.status(500).json({
            EM: 'Error from server',
            EC: -1,
            DT: null
        });
    }
};

const createCategory = async (req, res) => {
    try {
        const categoryData = req.body;
        const data = await categoryService.createCategory(categoryData);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        });
    } catch (error) {
        console.error('Error creating category:', error);
        return res.status(500).json({
            EM: 'error from server',
            EC: '-1',
            DT: '',
        })
    }
};

const getCategoryById = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const data = await categoryService.getCategoryById(categoryId);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        });
    } catch (error) {
        console.error('Error getting category by id:', error);
        return res.status(500).json({
            EM: 'Error from server',
            EC: -1,
            DT: null
        });
    }
};

const updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const updatedCategoryData = req.body;
        const data = await categoryService.updateCategory(categoryId, updatedCategoryData);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        });
    } catch (error) {
        console.error('Error updating category:', error);
        return res.status(500).json({
            EM: 'Error from server',
            EC: -1,
            DT: null
        });
    }
};

const getCategoriesByManufacturer = async (req, res) => {
    try {
        const { page, limit, manufacturer } = req.query;
        // const { manufacturer } = req.body;
        const data = await categoryService.getCategoriesByManufacturer(manufacturer, parseInt(page), parseInt(limit));
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        });
    } catch (error) {
        console.error('Error getting categories by manufacturer:', error);
        return res.status(500).json({
            EM: 'Error from server',
            EC: -1,
            DT: null
        });
    }
};

const handleSearchCategories = async (req, res) => {
    try {
        const { keyword } = req.body;
        const { page, limit } = req.query;
        const data = await categoryService.searchCategories(keyword, page, limit);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        });
    } catch (error) {
        console.error('Error searching categories:', error);
        return res.status(500).json({
            EM: 'Internal server error',
            EC: -1,
            DT: null
        });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const data = await categoryService.deleteCategory(categoryId);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        });
    } catch (error) {
        console.error('Error deleting category:', error);
        return res.status(500).json({
            EM: 'Internal server error',
            EC: -1,
            DT: null
        });
    }
};

const getSpecialCategoriesByPaginate = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const data = await categoryService.getSpecialCategoriesByPaginate(parseInt(page), parseInt(limit));
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        });
    } catch (error) {
        console.error('Error getting special categories:', error);
        return res.status(500).json({
            EM: 'Internal server error',
            EC: -1,
            DT: null
        });
    }
};

module.exports = {
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    getCategoriesByManufacturer,
    handleSearchCategories,
    deleteCategory,
    getSpecialCategoriesByPaginate
};

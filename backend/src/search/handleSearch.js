import { getAllCategories } from './dataFetching';
import { cleanData } from './dataCleaning';
import { trainModel } from './modelTraining';
import { getCategoryDetails } from '../services/categoryService';

const handleSearchCustomize = async (req, res) => {
    try {
        const { storageCapacity, ram, chipset, display } = req.body;

        if (storageCapacity !== undefined && ram !== undefined && chipset !== undefined && display !== undefined) {
            const categoriesData = await getAllCategories();
            const cleanedData = cleanData(categoriesData);
            const svmModel = trainModel(cleanedData);

            const searchResult = svmModel.run({ storageCapacity, ram, chipset, display });

            // Chuyển đổi searchResult thành một mảng các cặp giá trị (category, confidence)
            const resultArray = Object.entries(searchResult).map(([category, confidence]) => ({ category, confidence }));

            // Sắp xếp kết quả theo độ phù hợp (confidence)
            const sortedResult = resultArray.sort((a, b) => b.confidence - a.confidence);

            // Lấy ra 4 danh mục phù hợp nhất
            const top4Results = sortedResult.slice(0, 4);

            // Lấy ra mảng các categoryIds và confidences
            const categoryIds = top4Results.map(result => result.category);
            const confidences = top4Results.map(result => result.confidence);

            // Lấy thông tin chi tiết của các danh mục từ ID và bổ sung confidence
            const categoryDetails = await getCategoryDetails(categoryIds, confidences);

            return res.status(200).json({
                EM: 'Search customize successfuly!',
                EC: 0,
                DT: categoryDetails
            });

        } else {
            return res.status(400).json({ 
                EM: 'Thiếu thông tin cần thiết trong yêu cầu',
                EC: 400,
                DT: null
            });
        }
    } catch (error) {
        console.error('Error creating category:', error);
        return res.status(500).json({
            EM: 'error from server',
            EC: '-1',
            DT: '',
        });
    }
};


module.exports = {
    handleSearchCustomize
};

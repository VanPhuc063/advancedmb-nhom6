import billService from '../services/billService';

const createBill = async (req, res) => {
    try {
        // Lấy dữ liệu từ req.body
        const { totalPrice, user, paymentType, status, billDetails } = req.body;
        console.log("check data: ", req.body.bill )
        // console.log("check billDetails: ", billDetails )
        // Gọi service để tạo hóa đơn
        const data = await billService.createBill(totalPrice, user, paymentType, status, billDetails);

        // Trả về kết quả
        return res.status(201).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        });
    } catch (error) {
        console.error('Error creating bill:', error);
        return res.status(500).json({
            EM: 'Internal server error',
            EC: -1,
            DT: null
        });
    }
};

const getBills = async (req, res) => {
    try {
        const { page, limit } = req.query;

        // Gọi service để lấy hóa đơn
        const data = await billService.getBills(parseInt(page), parseInt(limit));

        // Trả về kết quả
        return res.status(200).json({
            EM: 'Bills retrieved successfully',
            EC: 0,
            DT: data.DT
        });
    } catch (error) {
        console.error('Error getting bills:', error);
        return res.status(500).json({
            EM: 'Internal server error',
            EC: -1,
            DT: null
        });
    }
};

export default {
    createBill, getBills
};

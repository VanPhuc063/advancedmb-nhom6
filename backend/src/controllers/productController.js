import Product from '../models/productSchema';

// Hàm xử lý route GET để lấy toàn bộ sản phẩm
const getAllProducts = async (req, res) => {
    // try {
    //     // Lấy toàn bộ sản phẩm từ CSDL
    //     const products = await Product.find();
    //     res.json(products); // Trả về danh sách sản phẩm dưới dạng JSON
    // } catch (err) {
    //     res.status(500).json({ message: err.message });
    // }

    try {
        // Render ra trang index để test
        res.render('index');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
};

module.exports = {
    getAllProducts,
};

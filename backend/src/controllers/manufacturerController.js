import manufacturerService from '../services/manufacturerService';

const createManufacturer = async (req, res) => {
    try {
        const manufacturerData = req.body;
        const data = await manufacturerService.createManufacturer(manufacturerData);
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

const getAllManufacturers = async (req, res) => {
    try {
        const data = await manufacturerService.getAllManufacturers();
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        });
    } catch (error) {
        console.error('Error getting manufacturers:', error);
        return res.status(500).json({
            EM: 'Error from server',
            EC: '-1',
            DT: '',
        });
    }
};

module.exports = {
    createManufacturer,
    getAllManufacturers
};
import Manufacturer from '../models/manufacturerSchema';

const createManufacturer = async (manufacturerData) => {
    try {
        const newManufacturer = new Manufacturer(manufacturerData);
        await newManufacturer.save();
        return ({ 
            EM: 'Create Manufacturer successfully', 
            EC: 0, 
            DT: newManufacturer 
        });
    } catch (error) {
        console.error('Error creating Manufacturer:', error);
        return ({ 
            EM: 'Internal server error',
            EC: -1, 
            DT: null 
        });
    }
};

const getAllManufacturers = async () => {
    try {
        const manufacturers = await Manufacturer.find();
        return ({ 
            EM: 'Get all manufacturers successfully', 
            EC: 0, 
            DT: manufacturers 
        });
    } catch (error) {
        console.error('Error getting manufacturers:', error);
        return ({ 
            EM: 'Internal server error',
            EC: -1, 
            DT: null 
        });
    }
};

module.exports = {
    createManufacturer,
    getAllManufacturers
};
import userService from '../services/userService';

const handleRegister = async (req, res) => {
    try {
        const userData = req.body;
        const data = await userService.createUser(userData);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: '', // data
        })
    } catch (error) {
        return res.status(500).json({
            EM: 'error from server', // error message
            EC: '-1', // error code
            DT: '', // data
        })
    }
};

const handleLogin = async (req, res) => {
    try {
        let data = await userService.handleLogin(req.body);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        return res.status(500).json({
            EM: 'error from server',
            EC: '-1',
            DT: ''
        })
    }
};

module.exports = { handleRegister, handleLogin };

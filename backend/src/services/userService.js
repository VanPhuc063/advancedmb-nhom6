import User from '../models/userSchema';
import bcrypt from 'bcrypt';

const createUser = async (userData) => {
    try {
        // Kiểm tra xem email đã tồn tại trong cơ sở dữ liệu chưa
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
            return {
                EM: 'Email already exists',
                EC: -3
            };
        }

        // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;
        
        // Thiết lập trường group mặc định nếu không được cung cấp
        if (!userData.group) {
            userData.group = 'customer';
        }

        const user = new User(userData);
        await user.save();
        return {
            EM: 'A user is created successfully',
            EC: 0
        };
    } catch (error) {
        console.log(error);
        return {
            EM: 'Something wrong in service...',
            EC: -2
        };
    }
};

const checkExistingEmail = async (email) => {
    try {
        const existingUser = await User.findOne({ email });
        return existingUser !== null;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const handleLogin = async ({ email, password }) => {
    try {
        // Tìm kiếm người dùng theo email
        const user = await User.findOne({ email });

        // Kiểm tra xem người dùng có tồn tại không
        if (!user) {
            return {
                EM: 'Email or password is incorrect',
                EC: 1
            };
        }

        // Kiểm tra mật khẩu
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return {
                EM: 'Email or password is incorrect',
                EC: 1
            };
        }

        // Loại bỏ trường password
        user.password = undefined;

        // Trả về người dùng nếu thông tin đăng nhập là đúng
        return {
            EM: 'Login successful',
            EC: 0,
            DT: user
        };
    } catch (error) {
        console.log(error);
        return {
            EM: 'Something wrong in service...',
            EC: -2
        };
    }
};

module.exports = { createUser, checkExistingEmail, handleLogin };

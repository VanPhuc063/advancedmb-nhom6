import express from "express";
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import setupViewEngine from './config/setupViewEngine.js';
import initWebRouter from './routes';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

// Kết nối đến MongoDB
connectDB();

// Middleware để cho phép express đọc dữ liệu JSON
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sử dụng CORS middleware và chỉ cho phép kết nối từ client có domain được chỉ định trong biến môi trường
app.use(cors({ origin: process.env.CLIENT_ORIGIN }));

// Khởi tạo các route
app.use("/api/v1/", initWebRouter());

// cấu hình view engine
setupViewEngine(app);

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

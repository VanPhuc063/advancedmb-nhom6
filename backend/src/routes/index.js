import express from "express";
import productRoutes from './productRoutes';
import categoryRoutes from './categoryRoutes';
import userRoutes from './userRoutes';
import searchRouter from './searchRoutes';
import manufacturerRoutes from './manufacturerRoutes';
import billRoutes from './billRoutes';

const router = express.Router();

let initWebRouter = () => {

    // Các routes được xử lý tại đây
    router.get('/', (req, res) => {
        return res.send('Hello world')
    });

    // route search
    // router.use('/search', searchRouter);
    
    // Sử dụng các routes
    router.use('/products', productRoutes);
    router.use('/categories', categoryRoutes);
    router.use('/users', userRoutes);
    router.use('/manufacturers', manufacturerRoutes);
    router.use('/bills', billRoutes);

    return router;
}

module.exports = initWebRouter;

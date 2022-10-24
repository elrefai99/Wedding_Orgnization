import { Application } from 'express';
import AuthRoutes from '../Routers/Auth/Auth.routes';
import UserRoutes from '../Routers/User/User.routes';
import HallRoutes from '../Routers/Halls/Hall.routes';
import CarsRoutes from '../Routers/Cars/cars.routes';
import ProductsRoutes from '../Routers/shop/Products.routes';
import CartRoutes from '../Routers/shop/Cart.routes'
import StripeRoutes from '../Routers/Stripe/Stripe.routes'

export default (app: Application) =>{
    app.use('/api', AuthRoutes);
    app.use('/api', UserRoutes);
    app.use('/api', HallRoutes);
    app.use('/api', CarsRoutes);
    app.use('/api', ProductsRoutes)
    app.use('/api', CartRoutes)
    app.use('/api', StripeRoutes)
}
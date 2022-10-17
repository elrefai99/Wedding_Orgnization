import { Application } from 'express';
import AuthRoutes from '../Routers/Auth/Auth.routes';
import UserRoutes from '../Routers/User/User.routes';
import HallRoutes from '../Routers/Halls/Hall.routes'

export default (app: Application) =>{
    app.use('/api', AuthRoutes);
    app.use('/api', UserRoutes);
    app.use('/api', HallRoutes);
}
import { Router } from "express";
import verifyToken from "../../Middlewares/Auth.middleware";
import {createANewCarController} from '../../Controllers/Cars/Cars.controller'

const router = Router();

// create cars
router.post('/create/cars', verifyToken, createANewCarController)


export default router;
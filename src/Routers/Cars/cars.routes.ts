import { Router } from "express";
import verifyToken from "../../Middlewares/Auth.middleware";
import {createANewCarController, getSinglePageController, getAllCarsController, updateCarsController, deleteCarController} from '../../Controllers/Cars/Cars.controller'

const router = Router();

// create cars
router.post('/create/cars', verifyToken, createANewCarController)

// Get Single Page
router.get('/get/:username/cars/:id', verifyToken, getSinglePageController)

// Get All halls
router.get('/get/all/', verifyToken, getAllCarsController)

// Update Car
router.put('/car/settings/update/:id', verifyToken, updateCarsController);

// Delete Car
router.delete('/car/settings/delete/:id', verifyToken, deleteCarController);

export default router;
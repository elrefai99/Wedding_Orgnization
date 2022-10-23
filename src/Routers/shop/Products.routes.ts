import { Router } from "express";
import verifyToken from "../../Middlewares/Auth.middleware";
import { createProductController, getPageDetailsController, getAllProductDetailsController, UpdateProductDetailsController, DeleteProductDetailsController } from "../../Controllers/shop/Products.controller";

const router = Router();

// create Halls
router.post('/create/product', verifyToken, createProductController)

// Get single page
router.get('/get/:username/hall/:id', verifyToken, getPageDetailsController)

// Get All halls
router.get('/get/all/:types', verifyToken, getAllProductDetailsController)

// Update Halls
router.put('/hall/settings/update/:id', verifyToken, UpdateProductDetailsController)

// Delete Halls
router.delete('/hall/settings/delete/:id', verifyToken, DeleteProductDetailsController)

export default router;
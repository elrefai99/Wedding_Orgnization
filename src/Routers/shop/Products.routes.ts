import { Router } from "express";
import verifyToken from "../../Middlewares/Auth.middleware";
import { createProductController } from "../../Controllers/shop/Products.controller";

const router = Router();

// create Halls
router.post('/create/product', verifyToken, createProductController)

// Get single page
router.get('/get/:username/hall/:id', verifyToken)

// Get All halls
router.get('/get/all/:types', verifyToken)

// Update Halls
router.put('/hall/settings/update/:id', verifyToken)

// Delete Halls
router.delete('/hall/settings/delete/:id', verifyToken)

export default router;
import { Router } from "express";
import verifyToken from "../../Middlewares/Auth.middleware";

const router = Router();

// create Cart
router.post('/create/cart', verifyToken)

// Get single page
router.get('/get/:username/cart/:id', verifyToken)

// Get All Cart
router.get('/get/all/:types', verifyToken)

// Update Cart
router.put('/cart/settings/update/:id', verifyToken)

// Delete Cart
router.delete('/cart/settings/delete/:id', verifyToken)


export default router;
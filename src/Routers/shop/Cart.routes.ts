import { Router } from "express";
import verifyToken from "../../Middlewares/Auth.middleware";
import {createCartController,getCartController, DeleteCartController} from '../../Controllers/shop/Carts.controller'

const router = Router();

// create Cart
router.post('/create/cart', verifyToken, createCartController)

// Get single page
router.get('/get/:username/cart/', verifyToken, getCartController)

// Delete Cart
router.delete('/cart/settings/delete/:id', verifyToken, DeleteCartController)


export default router;
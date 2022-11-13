import { Router } from 'express'
import verifyToken from '../../Middlewares/Auth.middleware'
import {
    createProductController,
    getPageDetailsController,
    getAllProductDetailsController,
    UpdateProductDetailsController,
    DeleteProductDetailsController,
} from '../../Controllers/shop/Products.controller'

const router = Router()

// create product
router.post('/create/product', verifyToken, createProductController)

// Get single page
router.get('/get/:username/product/:id', verifyToken, getPageDetailsController)

// Get All product
router.get('/get/all/:types', verifyToken, getAllProductDetailsController)

// Update product
router.put('/product/settings/update/:id', verifyToken, UpdateProductDetailsController)

// Delete product
router.delete('/product/settings/delete/:id', verifyToken, DeleteProductDetailsController)

export default router

import { Request, Response, NextFunction } from 'express'
import { ProductModel } from '../../Models/shop/Products.model'

// Create
const createProductController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const Owner_Type = req.user.isClothes
        if (Owner_Type === true) {
            const Owner = req.user.id
            const { title, image, catagory, sizes, collor, price } = req.body

            const product = await new ProductModel({ title, image, catagory, sizes, collor, price, Owner })
            const save_product = await product.save()

            res.status(200).json({ status: 'OK', message: 'success', save_product })
        } else {
            res.status(200).json({ status: 'Not Ok', message: 'Errors' })
        }
        next()
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

// Get Page Details
const getPageDetailsController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const page_id = req.params.id
        const get_Page = await ProductModel.findById(page_id)
        res.status(200).json({ status: 'OK', message: 'success', get_Page })
        next()
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

// Get All Product Details
const getAllProductDetailsController = async (_req: Request | any, res: Response, next: NextFunction) => {
    try {
        const get_All_Page = await ProductModel.find()
        res.status(200).json({ status: 'OK', message: 'success', get_All_Page })
        next()
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

// Update Product Details
const UpdateProductDetailsController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const page_id = req.params.page
        await ProductModel.findByIdAndUpdate(page_id, {
            $set: req.body,
        })
        res.status(200).json({ status: 'OK', message: 'success!! Update Done..!' })
        next()
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

// Delete Product Details
const DeleteProductDetailsController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const page_id = req.params.page
        await ProductModel.findByIdAndUpdate(page_id, {
            $set: req.body,
        })
        res.status(200).json({ status: 'OK', message: 'success!! Update Done..!' })
        next()
    } catch (err) {
        res.status(500).json({ message: err })
    }
}
export {
    createProductController,
    getPageDetailsController,
    getAllProductDetailsController,
    UpdateProductDetailsController,
    DeleteProductDetailsController,
}

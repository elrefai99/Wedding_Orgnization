import { Request, Response, NextFunction } from "express";
import { ProductModel } from "../../Models/shop/Products.model";

// Create
const createProductController = async (req: Request | any, res: Response, next: NextFunction) => {
    try{
        const Owner_Type = req.user.isClothes;
        if(Owner_Type === true){
            const Owner = req.user.id;
            const {title, image, catagory, sizes, collor, price} = req.body;

            const product = await new ProductModel({title, image, catagory, sizes, collor, price, Owner})
            const save_product = await product.save();
            
            res.status(200).json({status: "OK", message: "success",save_product});
        }else{
            res.status(200).json({status: "Not Ok", message: "Errors"});
        }
        next();
    }catch(err){
        res.status(500).json({message: err})
    }
}

// Get Page Details

// Get All Product Details

// Update Product Details

// Delete Product Details

export {
    createProductController
}
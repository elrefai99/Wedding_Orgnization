import { toJSON_Products } from "../../Interfaces/shop/Product";

export function toJSON (this: toJSON_Products){
    const Products = this;
    const ProductsObject = Products.toObject();
    delete ProductsObject.__v;
    return ProductsObject;
}
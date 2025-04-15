
import Product from "../models/productModel.js";

Product

const fetchProducts = async (req, res) => {
    try {
        const product = await Product.find()
        if (product.length == 0) {
       return res.status(404).json({
                ok: false,
                output: "No products found in your db"
            });
        }
                        ////// SELECT * FROM products
        res.status(200).json({ 
            ok: true,
            output: product,
            total: product.length
         })

    } catch (error) {
        console.log(`Something went wrong... ${error.message}`);
        res.status(404).json({ 
            error: error.message
         })  
    }
}


const fetchProductsDetails = async (req, res) => {
    try {
        const id = req.params.id 
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({
                ok: false,
                message: "Product not found"
            });
        }
        else {
            res.status(200).json({
                ok: true,
                product
            })
        }
            
        
    } catch (error) {
        console.log(`Something went wrong... ${error.message}`);
        res.status(404).json({ 
            error: error.message
         }) 
    }
}

const addProduct = async (req, res) => {
    try {
        const {title, subTitle, brand, category, description, price} = req.body
        const newProduct = await new Product({title, subTitle, brand, category, description, price}).save();
        res.status(201).json({
            ok: true,
            msg: "Product added successfully",
            product: newProduct
        });
    } catch (error) {
        console.log(`Something went wrong... ${error.message}`);
        res.status(404).json({ 
            error: error.message
         }) 
    }
}

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body,
         {new: true});
         if (!updatedProduct){
            res.status(404).json({
                ok: false,
                message: `Product not found against this id ${id}`
            });
         }
         res.status(200).json({
            ok: true,
            product: updatedProduct,
            message: "Product updated successfully"
        });
        
        
    } catch (error) {
        console.log(`Something went wrong... ${error.message}`);
        res.status(404).json({ 
            error: error.message
         }) 
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct){
            res.status(404).json({
                ok: false,
                message: `Product not found against this id ${id}`
            });
        }
        res.status(200).json({
            ok: true,
            product: deletedProduct,
            message: "Product deleted successfully"
        });
        
        
    } catch (error) {
        console.log(`Something went wrong... ${error.message}`);
        res.status(404).json({ 
            error: error.message
         }) 
    }
}

export { fetchProducts, fetchProductsDetails, addProduct, updateProduct, deleteProduct};
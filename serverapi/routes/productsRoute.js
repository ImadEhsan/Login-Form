import express from "express";

const productRoute = express.Router();

import * as prod from "../controllers/productsController.js";

productRoute.get("/", prod.fetchProducts)
            .post("/", prod.addProduct)

productRoute.get("/:id", prod.fetchProductsDetails)
            .put("/:id", prod.updateProduct)
            .delete("/:id", prod.deleteProduct);

export default productRoute;
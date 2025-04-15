import mongoose from "mongoose";

const { model , Schema } = mongoose

const productSchema = new Schema({

    title:{
        type: String,
        required: true
    },
    subTitle:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        default: 0
    },
    sold:{
        type: Number,
        default: 0
    },
    images: [{}], // AWS S3 Upload Images
    rating: {
        sold:{
            type: Number,
            default: 0
        },
    },
    numOfreviews: {
        type: Number,
        default: 0
    }  
}, {timestamps: true})

const Product = model("product", productSchema);

export default Product;
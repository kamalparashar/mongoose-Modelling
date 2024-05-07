import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
{
    description: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    productImage: {
        type: String, 
    },
// usually images are stored on
// one's own server in a seperate folder and the providing a public url of that folder
// or third party services like AWS: using their bucket service to store images and using their sdks which gives url 
// popular service: cloudinary gives url(string) in return 
    price: {
        type: Number,
        default: 0,
    },
    stock: {
        type: Number,
        default: 0,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
},
{timestamps: true});

export const Product = mongoose.model("Product", productSchema);
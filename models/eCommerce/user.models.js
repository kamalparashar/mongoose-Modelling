import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    }

},{timestamps: true});
// timestaps five two fields
// 1.  createdAt
// 2.  updatedAt

export const User = mongoose.model("User", userSchema);
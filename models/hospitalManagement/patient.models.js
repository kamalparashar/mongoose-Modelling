import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"],
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "B+","O+","AB+","ABO+", "A-", "B-","O-","AB-","ABO-"],
        required: true,
    },
    diagnosedWith: {
        type: String,
        required: true,
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    }
},{timestamps:true});

export const Patient = mongoose.model("Patient", patientSchema);
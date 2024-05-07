import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
{
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    subTodos: [
        {
           type: mongoose.model.Types.ObjectId,
           ref: "SubTodo", 
        },
    ],  //array of subTodos

},{timestamps: true});

export const Todo = new mongoose.model("Todo", todoSchema);
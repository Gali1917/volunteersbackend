import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    number:{
        type: Number,
        required: true,
        trim: true
    },
    document:{
        type: Number,
        required: true,
        trim: true
    },
    ocupation:{
        type: String,
        required: true,
        trim: true
    },
    country:{
        type: String,
        required: true,
        trim: true
    },
})

export default mongoose.model('User', userSchema);
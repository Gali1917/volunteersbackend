import mongoose from "mongoose";

const tareasSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    image:{
        url: String,
        public_id: String,
    }
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.model('Tareas', tareasSchema);
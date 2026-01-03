import mongoose, { mongo } from "mongoose";

const ExpenceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
}, { timestamps: true })

export default mongoose.models.Expence || 
mongoose .model("Expence",ExpenceSchema)
const mongoose=require('mongoose');

const TodoSchema=mongoose.Schema({
    task_name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['PENDING','COMPLETED'],
        default:'PENDING'
    }
},{timestamps:true});
module.exports=mongoose.model('Todo',TodoSchema);
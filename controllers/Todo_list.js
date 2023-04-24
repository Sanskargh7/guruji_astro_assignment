const Todo=require('../models/Todo_list');

//create tasks
exports.createTask=async(req,res)=>{
    const create=new Todo({
        task_name:req.body.tast_name,
        description:req.body.description,
        
    })
    const created=await create.save();
    if(created){
        return res.status(200).json({success:false,msg:"Task inserted in database"})
    }else{
        return res.status(400).json({success:false,msg:"unable to insert task in database"})
    }
}

//update task
exports.updateTask=async(req,res)=>{
    const id=req.prams.id;
    const findTask=await Todo.findByIdAndUpdate({_id,id},{
        task_name:req.body.task_name,
        description:req.body.description,
        status:req.body.status
    })
    if(findTask){
        return res.status(200).json({success:true,msg:"task is updated"})
    }else{
        return res.status(400).json({success:false,msg:"unable to update task"})
    }
}

//delete task
exports.deleteTask=async(req,res)=>{
    const id=req.params.id;
    const deleteTask=await Todo.findOneAndDelete({_id:id});
    if(deleteTask){
        return res.status(200).json({success:true,msg:"task is deleted successfully"})
    }else{
        return res.status(400).json({success:false,msg:"unable to delete task"})
    }
}

//get all task
exports.getAllTask=async(req,res)=>{
    const fetchTask=await Todo.find({});
    if(fetchTask){
        return res.status(200).json({success:true,tasks:fetchTask})
    }else{
        return res.status(400).json({success:false,msg:"unable to fetch tasks"})
    }
}
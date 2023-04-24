const express=require('express');
const {createTask,updateTask,deleteTask,getAllTask}=require('../controllers/Todo_list')
const{requireSignin}=require('../middlewares/Auth')
const router=express.Router();

router.post('/create_task',requireSignin,createTask);
router.put('/update_task/:id',requireSignin,updateTask);
router.delete('/delete_task/:id',requireSignin,deleteTask);
router.get('/fetAll_task',requireSignin,getAllTask);
module.exports=router;
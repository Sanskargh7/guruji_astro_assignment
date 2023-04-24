const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const userRoutes=require('./routes/userRoutes')
const taskRoutes=require('./routes/todoRoutes');

dotenv.config();
const app=express();

//database connection in mmongodb
app.use(express.json())

mongoose.connect(process.env.MONGO_URL).then((result)=>{
    console.log('database connected successfully')
}).catch(error=>console.log(error))

app.use('/api/',userRoutes);
app.use('/api/todo/',taskRoutes)


// listion port number
app.listen(process.env.PORT,()=>{
    console.log('server is started on localhost')
})
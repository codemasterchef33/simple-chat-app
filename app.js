const express=require('express');
const app=express();
const userRoutes=require('./routes/login')
const messageRoutes=require('./routes/message')

app.use(express.urlencoded({ extended:true }));
app.use(userRoutes);
app.use(messageRoutes);

app.listen(3000,()=>{
    console.log('server is running');
})

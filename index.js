//Setup Express server
const express=require('express');
const app=express();

const PORT=5000;

//Define route
app.get('/',(req,res)=>{
    res.send('Hello I am from express server');
})
app.get('/home',(req,res)=>{
    res.send('Hello I am from home page');
})

app.listen(PORT,()=>{
    console.log(`Your express server started on port ${PORT}`)
})
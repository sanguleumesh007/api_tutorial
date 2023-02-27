const express=require('express');
const app=express();
const port=8000;

let dogs=[
    {"name":"Rocky", "Breed":"German"},
    {"name":"brudo", "Breed":"japan"}
]
app.get('/dogs',(req,res)=>{
    res.json(dogs);
})
app.get('/dogs/:id',(req,res)=>{
    res.json(dogs[parseInt(req.params.id)-1])
})
app.get('/umesh',(req,res)=>{
    res.send("Umesh............gyfvkhkuy......")
})
app.listen(port,()=>{
})
    console.log(`Server is running on port ${port}`);
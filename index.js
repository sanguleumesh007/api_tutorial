const express=require('express');
const app=express();
const port=8001;
const mysql = require('mysql');

let dogs=[
    {"name":"Rocky", "Breed":"German"},
    {"name":"brudo", "Breed":"japan"}
]



const connection = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"PhantomUS@2000",
    database:'test'

});

connection.connect((err)=>{
    if(err){
        console.log("err", err);
        throw err;
    }
    console.log("Connectiion done")
    
})

// var sql = create

// var q = "CREATE TABLE dev_team (id int, name varchar(255), role varchar(255));"
// connection.query(q, function(err, result){
//     if(err) throw err;
//     console.log(result);
// })

// connection.query("INSERT INTO dev_team (id, name, role) values (1, 'harshit', 'CTO')", (err, result)=>{
//     if(err){
//         throw err;
//     }
//     console.log(result);
// })

var q="SELECT * FROM movies ;"
connection.query(q, function(err,result){
    if(err) throw err;
    console.log(result);
})
app.get('/dogs',(req,res)=>{
    res.json(dogs);
})
app.get('/dogs/:id',(req,res)=>{
    res.json(dogs[parseInt(req.params.id)-1])
})
app.get('/',(req,res)=>{
    res.send("Umesh.......Here.")
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

const express = require('express')

const app = express();

const port = 8000;

let data = [
    {
        "id": 1,
        "name": "John",
        "age": 25
    },
    {
        "id": 2,
        "name" : "kate",
        "age": 30
    },
    {
        "id": 3,
        "name": "jack",
        "age": 35
    },
    {
        "id": 4,
        "name": "alex",
        "age": 20
    }
]

app.set('view engine','ejs')

app.get('/',(req,res) => {
    return res.render('table',{
        users : data
    })
})

app.listen(port,(err) => {
    if(err){  
        console.log(err);
        return false;
    }
    console.log(`server is start on the port : ${port}`);
})
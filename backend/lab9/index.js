const express = require('express');
const cors = require('cors');
const {data} = require("./data.js");

let app=express();
app.use(cors());

let user = {
    name: "Ayushi Chaubey",
    class: "B. Tech CS",
    email: "ayushi@gmail.com",
    image:"https://cdn.pixabay.com/photos/2020/07/01/12/58/icon-5359553_640.png",
    isIntelligent:true,
    sub:[
        "microservices,javascript,python"
    ]
}

app.get("/",(req,res)=>{
    res.send("welcome to backend.");

});
app.get("/about",(req,res)=>{
    if(user){
        res.status(200).send(user);
    }else{
        return res.status(404).send("user does not exist");
    }
});
app.get("/products", (req, res)=>{
    if(data){
        res.status(200).send(data);
    }else{
        return res.status(404).send("products does not exists");
    }
})

let PORT = 8080;

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
});
const express = require("express");
const fs = require("fs");
const app = express();
const hostname = "127.0.0.1";
const port = 8080;

app.get("/" , (req , res)=>{
    // res.status(200).render(fs.readFileSync("/home/nishrajnniha/Desktop/SSIP HACKATHON/login_&_Registration_System/Register.html"));
}).listen(port, hostname , ()=>{
    console.log("Connection Success!");
})
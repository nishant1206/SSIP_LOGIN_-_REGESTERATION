const exp = require('express');
const app = exp();

const server_ip = "127.0.0.1";
const port = 8080;

app.get("/", function(req , res){
    res.send("This is Main Page of my App")
});

app.get("/About", function(req, res){
    res.send("This is About Page of my App")
})

app.listen(port , server_ip , function(){
    console.log(`Server Started Successfully At http://${server_ip}:${port}`)
});
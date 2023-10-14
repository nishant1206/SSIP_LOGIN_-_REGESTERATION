const mysql = require("mysql");

const conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "nishu_nishant_1206"
});

conn.connect(()=>{
    console.log("connected!");
    conn.query("CREATE DATABASE IF NOT EXISTS MYDB", ()=>{
        console.log("Database Created");
    })
})
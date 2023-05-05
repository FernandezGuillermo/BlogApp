import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"32463929",
    database:"blog"
})

db.connect(function(err){
    if(err){
        console.log(err)
    }else{
        console.log("connectado");
    }
})


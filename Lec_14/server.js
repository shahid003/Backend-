const express=require("express")
const fs=require("fs")
const app=express();
app.get("/users",(req,res)=>{
    fs.readFile("./users.json","utf-8",function(err,data){
        if(err) return res.send(err)
            let users= JSON.parse(data)
            res.json(users)
    })
})
// 
app.listen(2222,()=>{
    console.log("server started")
})

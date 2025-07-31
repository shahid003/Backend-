const express=require("express")
const app=express();
const fs=require("fs")
app.use(express.static(__dirname+"/public"))
app.get("/todos",(req,res)=>{
    
})

app.listen(2222,()=>{
    console.log("server Started....")
})
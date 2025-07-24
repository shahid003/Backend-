const express=require("express");
const app=express();
express.urlencoded({extended:true})
app.use(express.static(__dirname+"/public"));
// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/index.html");
// })
// app.get("/about.html",(req,res)=>{
//     res.sendFile(__dirname+"/about.html");
// })
app.post("/adduser",(req,res)=>{
    console.log(req.body)
    let name=req.body.name;
    let rollno=req.body.rollno;
    res.json({
        name,
        rollno
    })
}) 
app.listen(2222,()=>{
    console.log("server started");
})
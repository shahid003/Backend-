const express=require("express");
const { m1, m2 } = require("./middleware/middleware");
const app=express();
app.use(express.static(__dirname+"/public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(m1)
app.use(m2)
app.get("/home",(req,res)=>{
    console.log("running controller home")
    res.json({
        success:true,
        message:"Welcome to home page"
    })
})
app.get("/dashboard",dashboard,(req,res)=>{
    if(req.isAdmin){
        return res.json({
            success:true,
            message:"admin dashboard"
        })
    }
    return res.json({
        success:false,
        message:"not authorized"
    })
})
app.listen(2323,()=>{
    console.log("Server Started")
})






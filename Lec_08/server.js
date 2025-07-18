const express=require("express")
const app=express()

//nodejs is event driven
app.get("/",(req,res)=>{
    console.log(req)
    // res.send("Hello Brother!!!!")
    res.json({
        name: "Shahid",
        address: "Chandigarh",
        isLogin:true
    })
}) 
app.get("/users/:id",(req,res)=>{       //params
    console.log(req.params.id)
    let id=req.params.id
    res.send(id)
})
app.get("/blogs",(req,res)=>{           //query parameter
    console.log(req.query.title)
    console.log(req.query.desp)
    res.send("got it!!!")
}) 

app.listen(2222,()=>{
    console.log("server started")
})

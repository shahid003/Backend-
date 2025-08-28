const express=require("express")
const mongoose = require('mongoose');
const app=express();
const Blog=require('./model/blog')
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.post("/blogs",async(req,res)=>{
    let title=req.body;
    let body=req.body;
    let blog={
        title:title,
        body:body,
        date:Date.now()
    }
    let newBlog=new Blog(blog)
    await newBlog.save()
    res.json({
        success:true,
        message:"blog added successfully"
    })
})
app.get("/blogs",async(req,res)=>{
    let allBlogs=await Blog.find();
    res.json({
        success:true,
        message:"all data fetched",
        data:allBlogs
    })
})
app.get("/blogs/:id",async(req,res)=>{
    let id=req.params.id;
    let blog=await Blog.findById(id)
    res.json({
        success:true,
        message:"blog fetched successfully",
        data:blog
    })
})
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));
app.listen(5556,()=>{
    console.log("server started")
})



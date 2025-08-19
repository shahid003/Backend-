const express=require("express")
const router=express.Router();
const Blog=require("../model/blog")
router.post("/",
)
router.get("/",async(req,res)=>{ //fetch data using find method
    let allBlogs = await Blog.find();
    res.json({
        success:true,
        message:"all blogs fetch successffully",
        data:allBlogs
    })
})

module.exports=router
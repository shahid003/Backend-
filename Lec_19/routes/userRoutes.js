const express=require("express")
const router=express.Router();
const USER=require("../model/user")
router.post("/",async (req,res)=>{
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let user={
        username:username,
        email:email,
        password:password
    }
    let newUser =  new USER(user);
    await newUser.save();//data add in mongoose using save method this is and IO operation
    //await is used in all function of db

    res.json({
        success:true,
        message:"user added successfully",
        data:newUser
    })


})
//create
router.get("/",async(req,res)=>{ //fetch data using find method
    let allUsers = await USER.find();
    res.json({
        success:true,
        message:"all blogs fetch successffully",
        data:allUsers
    })
})
router.get("/",async(req,res)=>{//finding blog by their id name
    let id = req.params.id;
    //we can use findBYiD and findByOne
    let user = await USER.findById(id);
    res.json({
        success:true,
        message:"blog fetch successfully",
        data:user
    })
})

module.exports=router
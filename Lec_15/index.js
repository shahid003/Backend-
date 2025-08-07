const express=require("express")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"))

app.post("/addu",(req,res)=>{
    // console.log("dsadsdsds")
    try
    {
    let email=req.body.email;
    let name=req.body.name;
    let newUser={
        email,
        name
    }
    console.log(email,name);
       res.json({
        success:true,
        data:newUser,
        message:"user added successfully"
    })
    }
    catch(error){
        res.json({
            success:false,
            error:"something went wrong"
        })
    }
})

app.listen(2222,()=>{
    console.log("server started")
})

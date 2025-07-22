const express=require("express");
const fs=require("fs")
const app=express();
app.use(express.json());

app.post("/",(req,res)=>{
    console.log(req.body)
    const name=req.body.name
    const roll=req.body.roll
    const data=`name:${name} roll:${roll} \n`;
    // res.json({
    //     "name":name,
    //     "roll":roll
    // })
    fs.appendFileSync("file.txt",data);
    res.send("data");
})

app.listen(2222, () => {
  console.log("Server Running");
});

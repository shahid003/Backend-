const fs=require("fs")
fs.writeFile("./demo.txt","hello G27",function(err){
    if(err) return console.log(err);
    console.log("data")
})

 
const fs=require("fs")
fs.writeFile("../r1.txt","second write",function(err){
    if(err) return console.log(err);
    console.log("success")
})

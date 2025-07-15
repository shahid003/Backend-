const fs=require("fs")
fs.readFile("../r1.txt","utf-8",function(err,data){
    if(err) console.log(err)
        console.log(data)
})
fs.readFile("../demo.txt","utf-8",function(err,data){
    if(err) console.log(err)
        console.log(data)
})
// fs.readFile("../r1.txt","utf-8",function(err,data){
//     if(err) console.log(err)
//         console.log(data)
// })
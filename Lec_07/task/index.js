const fs=require("fs")
fs.readFile("../users.txt","utf-8",function(err,data1){
    if(err) return console.log(err)
        let user1=JSON.parse(data1)
        console.log(user1)
    fs.readFile("../users2.txt","utf-8",function(err,data2){
        if(err) return console.log(err)
            let user2=JSON.parse(data2)
            console.log(user2)
            let allusers=user1.concat(user2)
            console.log(allusers)
            fs.writeFile("./allusers.txt",JSON.stringify(allusers),function(err){
                if(err) return console.log(err);
                console.log("work completed")
        })
    })    
})

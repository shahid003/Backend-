const fs=require("fs")
let users=[
    {
        id:1,
        name:"person1",
        age:"34"
    },
    {
        id:2,
        name:"person2",
        age:"20"
    },
]
fs.writeFile("../users2.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err)
        console.log("users written")
})

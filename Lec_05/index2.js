let users=[
    {
        id:1,
        age:16,
        name: "pankaj"
    },
    {
        id:1,
        age:15,
        name: "vikas"
    }
]
function isEligible(id){
    return new Promise((resolve,reject)=>{
        let user= users.filter((user)=> user.id==id)[0];
        console.log(user)
        if(!user) return reject("no user found")
            if(user.age>=18){
                return resolve("eligible for vote")
            }else{
                return reject("not eligible")
            }
    })
}
isEligible(1).then((data)=>{
    console.log(data);
})
//
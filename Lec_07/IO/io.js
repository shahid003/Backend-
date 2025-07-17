const fs=require("fs")
function read(file){
    return new Promise((resolve,reject)=>{
        fs.readFile(file,"utf-8",function(err,data){
            if(err) return reject(err);
            let users=JSON.parse(data)
            resolve(users)
        })
    })
}
function write(file,data){
    
}
module.exports.read=read;
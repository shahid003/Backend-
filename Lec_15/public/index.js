// const { response } = require("express")

const signForm=document.querySelector("#signup")
const email=document.querySelector("#email")
const nme=document.querySelector("#name")
// console.log("fsdfsdfsd")

function adduser(email,name){
    let newUser={
        email:email,
        name:name
    }
    fetch("/addu",{
        method:"POST",
        body:JSON.stringify(newUser),
        headers:{
            "content-type":"application/json"
        }
    }).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)
        if(data.success){
            alert(data.message)
            signForm.reset()
        }
        else{
            alert(data.error)
            signForm.reset()
        }
    }).catch((err)=>{
        console.log(err)
    })
}
signForm.addEventListener("submit",function(e){
    e.preventDefault();
    adduser(email.value,nme.value)
})
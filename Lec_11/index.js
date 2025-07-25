let res=document.getElementById("mydiv");// get id in return 
console.log(res);
let temp=document.getElementsByClassName("h2"); //get collections in return 
console.log(temp);
let res2=document.getElementsByTagName("p");
console.log(res2);
let out=document.querySelector("#mydiv");
console.log(out)


console.log(res.innerHTML); //getter
res.innerHTML=`<p>change using dom manipulation</p>`
console.log(res.innerText);

res.innerText=`hello jworld` //setter
/*text content */


let btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    res.setAttribute("class","js")          
})

let form=document.querySelector(".signup")
btn.addEventListener("click",()=>{
    form.classList.toggle("hide")
})


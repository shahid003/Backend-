let box=document.querySelector("#box")
let btn=document.querySelector("#btn");
let stop=document.querySelector("#stp")
let colours=["red","blue","black","green","yellow","purple","pink","orange","brown","grey"]
let id;
function generateRandomColour(){
    let index=Math.floor(Math.random()*10);
    console.log(index);
    let randomColour=colours[index];
    console.log(randomColour)
    box.style.background=randomColour
}
btn.addEventListener("click",function(){
    setInterval(()=>{
        generateRandomColour();
    },500)
})
stop.addEventListener("click",function(){
    if(id){
        clearInterval(id);
    }
})
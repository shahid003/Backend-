function getUsers(URl){
    //send request to this url to get url data 
    fetch(URl)
    .then((res)=>{
        console.log(res)
        return res.json()
    })
    .then((data)=>{
        console.log(data) 
        data.forEach((user)=>{
            displayUser(user);
        })
    })
    .catch((err)=>{
        console.log(err)
    })

}
getUsers("https://jsonplaceholder.typicode.com/users");
let userContainer=document.querySelector(".user-container")
function displayUser(user){
    let li=document.createElement("li");
    li.innerHTML=`<div class="user-info">
                <div>
                <h1>${user.name}</h1>
                <h1>${user.username}</h1>
            </div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>`
    userContainer.appendChild(li)
}
let todo={
    id:12345,
    title:"Todo4"
}
function addTodo(){
    let li=document.createElement("li")
    li.innerHTML=`<div>
                <input type="checkbox" name="" id="checkbox">
                <h1>${todo.title}</h1>
                <div>
                    <button class="edit">✏️</button>
                    <button class="delete">❌</button>
                    <p>dterio frei reihujode ireufe ifgia iegrelavb</p>
                </div>
            </div>`
            ul.appendChild(li);
}
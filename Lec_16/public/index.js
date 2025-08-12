// function getCommentData(){
//     axios.get("https://jsonplaceholder.typicode.com/comments")
//     .then((res)=>{
//         console.log(res.data);
//     })
// }
// getCommentData();

async function getCommentData(){
    try {
        const res=await axios.get("https://jsonplaceholder.typicode.com/comments");
        console.log(res.data);
    } catch (error){
        console.error(error);
    }
}
getCommentData();

function adduser(email,password){
    axios.post('/user', {
        email:email,
        password:password
  })
  .then((res)=>{
    console.log(res.data)
  })
  .catch((err)=>{
    console.log(err.message);
  })

}
adduser("iojge@gmail","ujythrg");
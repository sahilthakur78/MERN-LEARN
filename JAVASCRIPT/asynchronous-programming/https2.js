function fetchuserdata(){
    fetch("https://jsonplaceholder.typicode.com/users/2").then((response)=>{
        return response.json().then((userdata)=>{
         console.log("here is the user's details",userdata.id)
        })
    }).catch((error)=>{
     console.log("did't get the response or data",error)
    })
}
fetchuserdata();
fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
    return response.json().then((posts)=>{
        console.log("fetched successfully",posts)
    })
}).catch((error)=>{
    console.log("error fetching data",error);
})
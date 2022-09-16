import React from "react";

function User(page = 1){
    return fetch(`https://reqres.in/api/users?page=${page}`)
    .then((responese => responese.json()))
    // .then((result)=> result.data)
    .catch((err)=>{
        console.log(err)
    })
   
}
export default User
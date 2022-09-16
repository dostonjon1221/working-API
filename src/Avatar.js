 
import "./Avatar.css"
import React from 'react'

function Avatar({name,url}){
    return <img height="120" width="120" alt = {name} className="image" src = {url} /> 
  
}
export default Avatar
// const Avatar = ({name,url})=>{
//     return (
//         <div>
//             <img width = "120" height = "120"></img    >
//         </div>
//     )
// }
// export default Avatar
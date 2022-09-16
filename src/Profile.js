import "./Profile.css"
import React from 'react'
function Profile({name,email}){
    
    return(
        <div>
            <h2>{name}</h2>
            <h3>
                <a href={`molito:${email}`} >{name}</a>
            </h3>
        </div>
    )
}
export default Profile
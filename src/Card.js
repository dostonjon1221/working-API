import React from "react";
import Avatar from "./Avatar"
import Profile from "./Profile"
import "./Card.css"

function Card({user}){
    return <section id= {user.id} className="Card">
         <Avatar name = {user.first_name} url = {user.avatar} />
    <Profile name = {user.first_name} email = {user.email} />
        </section>
}
export default Card
import React from "react";
import '../App.css';



 const UserCard = (props) => {

  return (
    <div>
    <h2>My Profile</h2>
    <div className="card">
      <img src={props.img} alt="user" />
      <p className="name">Name: {props.name}</p>
      <p className="name">Portfolio: <a target="new_" href={props.blog}>Click Here</a></p>
      <p>Location: {props.location}</p>
      <p>followers: {props.followers}</p>
      <p>Following: {props.following}</p>
    </div>
  </div>
  )
  }
 
export default UserCard;
 

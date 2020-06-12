import React from "react";

import '../App.css';


 

const FollowingCard = ({following, img, blog}) => {
    return (
        <div className="card">
         
            <img src={img} alt="user"/>
            <p className="name">{following}</p>
            <p className="ghpro"> <a href={blog}>GH Profile</a></p>
          
        </div>
    )
}

export default FollowingCard;

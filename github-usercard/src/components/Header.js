import React from 'react'
import lambdalogo from '../assets/lambdalogo.png';
import githublogo from '../assets/githublogo.png';
import '../App.css';





export default function Header() {
    return (
      
        <div>
      
            <h1>Welcome to My GitHub Userpage</h1>
            <img src={githublogo} alt="githublogo" className="logos" />  <spam>{"<3"}</spam> <img src={lambdalogo} alt="lambdalogo"  className="logos"/>
      
            
        </div>
        
    )
}

  
import React from 'react';
import axios from "axios";
import FollowingCard from "./FollowingCard";
import '../App.css';



class Following extends React.Component {

    state ={
      following: [],
    }
    
    componentDidMount = () => {
    axios
    .get(`https://api.github.com/users/Hooliocoolio/following`)
    .then (res => {
      console.log("following data", res.data);
      this.setState({
        following: res.data
      });
    })
    .catch (error => console.log (error));
    
  }
  

  
    render (){
    return (
    
        <div>
           {this.state.following.map (followin => (
                <FollowingCard key={followin.id}
                    img={followin.avatar_url} 
                    following = {followin.login}
                    blog = {followin.html_url}
                />
           ))}
        </div>
    );
}
 }
  
  export default Following;

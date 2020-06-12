import React from 'react';
// import axios from "axios";
import UserCard from "./UserCard";

const UserCard = (props) => {
      
    // const [ user, setUser ] = useState();
  // constructor(props){
      //   super(props);
      //   this.state = [
      //     {
      //       id:"",
      //       user:"",
      //       img:"",
      //       name:"",
      //       location:"",
      //       blog:"",
      //     followers:"",
      //   following:""  
      //     }
      //   ]
      // }
   
        
     
     

    
    // state ={
    //   name: [],
    // }
  
    // componentDidMount () {
    //   axios
    //   .get(`https://api.github.com/users/hooliocoolio`)
    //   .then (res => {
    //     this.setState({
    //       name: res.data.name,
    //       img: res.data.avatar_url,
    //       bio: res.data.bio,
    //     });
    //   })
    //   .catch (error => console.log (error));
    // }
  
  

    return (
      <div> name={props.name} img={props.img} blog={props.blog}  />
      </div>
    );

  }
  
  export default User;
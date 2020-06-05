import React from 'react';

const userInfo = (props) => {
    return (
        
        <div class = "card-info" > 
            <h3 class ="name"> Ricardo Leite </h3>
            <p class="username">ricardo-ljr</p> 
            <p class = "location"> Location: Utah </p>
            <p class="profile">
                Profile: 
                <a class="ghubUrl" href="https://github.com/ricardo-ljr">https://github.com/ricardo-ljr</a></p>
                <p class="followers">Followers: 6</p>
                <p class="following">Following: 2</p>
                <p class="bio">Bio: null</p>
        </div>
    )
    
    export default userInfo;
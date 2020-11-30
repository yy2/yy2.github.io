import React from "react";
import pic from "../images/profile2.png";
import grumpyCat from "../images/grumpy_cat_pixel.jpg";
import "../css/styles.css";
// import { Button } from 'react-bootstrap';

//const container = document.getElementById("song");

// function grumpyCat() {
//     const text = '99 little bugs in the code.<99 little bugs in the code.<Take one down, patch it around,<127 little bugs in the code...    <';
//     const chars = text.split('');
//     const container = document.getElementById("song");

//     let i = 0;
//     setInterval(function () {
//         if (i < chars.length) {
//           if(chars[i] == "<") {
//             container.innerHTML += "<br/>";
//             chars[i++];
//           }
//           else {
//             container.innerHTML += chars[i++];
//           }
//         } else {
//                 i = 0;
//                 container.innerHTML = "";
//         }
//     }, 130);
// }

function Home() {
    return (
        <div className="home-card-container">
            <div className="card-area">
            <div className="home-container-header">
                <div className="profile-pic"><img src={pic} alt="profile pic of me"></img></div>
                <div className="engineer-title">
                    <h1>Yu Yuan</h1>
                    <h2>Software Engineer</h2>
                </div>  
            </div>
            <div className="home-container-info">
                    <h1>Hello</h1>
                    <p>My name is Yu. I get asked this a lot, but you can pronounce it as "you".</p>
                    <div className="grumpy-cat-section">
                    <img alt="grumpy cat" src={grumpyCat} className="grumpy-cat-img"></img> 
                    <div className="bug-text">99 little bugs in the code.<br/>99 little bugs in the code.<br/>Take one down, <br/> patch it around,<br/> little bugs in the code...</div>
                    </div>
            </div>
            </div>
        </div>
    );
}

export default Home;
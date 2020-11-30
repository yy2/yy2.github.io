import React from "react";
import pic from "../images/profile2.png";
import "../css/styles.css";
// import { Button } from 'react-bootstrap';


function Home() {
    return (
        <div className="card-container">
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
                    <p>My name is Yu. You can pronounce is as "you". (I get asked this a lot)</p>
                    <p>But you can call me Yui (you-ee) or in professional context just use both first and last name.</p>
                    <p>I know, it can be quite confusing... or it can be ridiculously funny (depending on the situation).</p>
            </div>
            </div>
        </div>
    );
}

export default Home;
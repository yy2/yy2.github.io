import React from "react";
import "../css/styles.css";

function Works() {
    return (
        <div className="card-container"> 
            <div className="card-area">
            <h2 className="page-title">My Work</h2>
            <div className="info-container">
            <br />
                <p>I am currently working on small projects involving React. Below is a list of projects to be displayed soon:</p>
                <ul>
                    <li>To Do List with React Hooks <a href="https://hvjje.csb.app/">CodeSandbox Demo</a></li>
                    <li>Keeper App <a href="https://lx04g.csb.app/">CodeSandbox Demo</a></li>
                    <li>Simple Budgeting App</li>
                    <li>Simple Social Media App</li>
                    <li>Discord Music Bot</li>
                </ul>
            </div>
            </div>   
        </div>
    );
}

export default Works;
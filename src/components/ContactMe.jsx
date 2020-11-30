import React from "react";
import "../css/styles.css";

function ContactMe() {
    return (
        <div className="card-container">    
        <div className="card-area">
        <h2 className="page-title">Contact Me</h2>
            <div className="info-container">
                <h6>Want to get in touch with me? The best methods are below:</h6>
                <br/>
                <ul>
                    <li>Gmail: yzyhen@gmail.com</li>
                    <li><a href="https://github.com/yy2">GitHub</a></li>
                    <li><a href="https://linkedin.com/in/yu-z-yuan">LinkedIn</a></li>
                </ul>
            </div>

        </div>
        </div>
    );
}

export default ContactMe;
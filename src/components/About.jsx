import React from "react";
import Skills from "./Skills";
import "../css/styles.css";

function About() {
    return (
        <div className="card-container">
            <div className="card-area">
                <h2 className="page-title">About Me</h2>
                <div className="info-container">
                    <p>I graduated from University of Florida with a Bachelor's in Digital Arts and Sciences. <space></space>
                        <div className="das-popup">What is DAS?
                            <span className="das-popup-text">DAS combines both computer science and arts into one degree.
                            Student learn the same fundamentals as computer science majors, but also learn about animations
                            and 3D modeling.</span>
                        </div>
                    </p>
                    <p>I am currently working at JP Morgan and Chase as a software developer, mainly working with Java and the Spring Frameworks.</p>
                    <p>Here is a list of skills I've acquired throughout my career: </p>
                    <div className="skillset">
                        <Skills name="Java" color_style={{color: 'green'}}/>
                        <Skills name="HTML" color_style={{color: 'red'}}/>
                        <Skills name="Javascript" color_style={{color: 'blue'}}/>
                        <Skills name="CSS" color_style={{color: 'purple'}}/>
                        <Skills name="React" color_style={{color: 'green'}}/>
                        <Skills name="Unix" color_style={{color: 'red'}}/>
                        <Skills name="SQL" color_style={{color: 'purple'}}/>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        </div >
    );
}

export default About;
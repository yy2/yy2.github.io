import React from "react";
import "../css/styles.css";

function Skills(props) {
    
    return (
        <div className="skilltag" style={props.color_style}>
            {props.name}
        </div>
    )
}

export default Skills;
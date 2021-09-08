import React from "react";
import "./Person.css"

const Person = (props) => {
    const styleCSS = {
        border: "1px solid red",
        fontWeight: "bold"
    }
    
    return <div>
            <p style={styleCSS} className="person" onClick={props.clickHere}>This is a person {Math.random()}. Name: {props.name}. Age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
}

export default Person;
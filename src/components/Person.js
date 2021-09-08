import React from "react";

const Person = (props) => {
    return <div>
            <p onClick={props.clickHere}>This is a person {Math.random()}. Name: {props.name}. Age: {props.age}</p>
            <p>{props.children}</p>
        </div>
}

export default Person;
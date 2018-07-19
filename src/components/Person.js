import React from "react";

const Person=(props)=>{
    return(
        <div>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        <p>{props.children}</p>
        </div>
    );
}

export default Person;
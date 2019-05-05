import React, {Component} from "react";

import './Person.css';

class Person extends  Component{

    changeHandler=(data)=>console.log("change:"+data);

    render = () => {
        return (
            <div className='Person' onClick={()=>this.props.handler('person')}>
                <h1>{this.props.name}</h1>
                <h2>{this.props.age}</h2>
                <p>{this.props.children}</p>
            </div>
        );
    }
}
export default Person;
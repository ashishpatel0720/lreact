import React, {Component} from "react";

import Person from "./Person";

export default class Persons extends  Component{

    render = () => {
        return this.props.persons.map((p)=>{
            return <Person name={p.name} age={p.age} handler={this.props.handler}/>
        });
    }
}

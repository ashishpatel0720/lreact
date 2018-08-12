import React, {Component} from "react";

class Person extends  Component{

    changeHandler=(data)=>console.log("change:"+data);

    render = () => {
        return (
            <div  className="App" onClick={()=>this.props.click('hi')}>
                <h1>{this.props.name}</h1>
                <h2>{this.props.age}</h2>
                <p>{this.props.children}</p>
            </div>
        );
    }
}
export default Person;
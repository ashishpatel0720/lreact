import React, {Component} from "react";


export default  class Car extends Component{

    render=()=>{
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.children}</p>
            </div>
        )
    }


}

import React, {Component} from 'react';



export default class Counter extends Component{
    render(props){
        return (
            <div>
                <input type='text' value={this.props.value} onChange={this.props.changed}/>
                <p>Value: {this.props.value}</p>
                <button onClick={this.props.reset}>reset</button>
            </div>
        )
    }

}
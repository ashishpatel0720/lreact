import React, {Component} from 'react';
import './App.css';

import Persons from "./components/Persons";
import Counter from './components/Counter';


class App extends Component {

    state={
        person:[
            {name:'ashish',age:21},
            {name:'patel',age:22}
        ],
        value:""
    };

    render() {
        return (
            <div className='App'>
                <h1>Hello {this.props.user}</h1>
                <hr/>

                <h2>Swap Of users</h2>
                <Persons persons={this.state.person} handler={this.clickHandler}/>
                <button onClick={()=>this.clickHandler('Button')}>Click</button>

                <hr/>
                <h2>2 Way binding</h2>
                <Counter changed={this.inputChangeHandler} reset={this.resetValue} value={this.state.value}/>
            </div>
        );
    }

    clickHandler =(source) =>{
        console.log("invoked by"+source);
        let {person}=this.state;

        let temp=person[0];
        person[0]=person[1];
        person[1]=temp;
        this.setState({person});
    }

    inputChangeHandler=(event)=> {

        let {value}=this.state;
        value=event.target.value;
        this.setState({value});

    }

    resetValue=()=>{
        let value="";
        this.setState({value});
    }
}

export default App;

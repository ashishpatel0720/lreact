import React, {Component} from 'react';
import './App.css';

import Person from "./components/Person";

class App extends Component {

    state={
        user1:{
            name:"Ashish",
            age:10
        },
        user2:{
            name:"Patel",
            age:20
        },

    }


    interchangeHandler=(v)=>{
    console.log(v);
        let s={...this.state};

        let temp=s.user1;
        s.user1=s.user2;
        s.user2=temp;
        this.setState(s);
    }
  render() {
    return (
      <div>
       <Person name={this.state.user1.name}  click={(v)=>this.interchangeHandler(v)} age={this.state.user1.age}>
          This i some information about that person as well
       </Person>
          <Person name={this.state.user2.name}  click={(v)=>this.interchangeHandler(v)} age={this.state.user2.age}>
              Patel is greate!
       </Person>
          <button onClick={this.interchangeHandler}>InterChange</button>

      </div>
    );
  }
}

export default App;

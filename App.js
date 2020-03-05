import React,{Component} from 'react';

import './App.css';
import Person from './person/person';

class App extends Component{
  state={
    persons:[
      {name:'manish', age:30 }, 
      {name:'mk', age:21 },
      {name:'vijay', age:20}

    ]}
    switchNameHandler = () =>{
      //console.log('button is clicked !');
      //Don't do this :this.state.persons[0].name='React with manish';
      this.setState({
        persons:[
          {name:'React with manish', age:30 }, 
          {name:'mk', age:21 },
          {name:'vijay', age:21},
        ]
      })
    }
  
  render()
  {
    return(
      <div className="App">
        <h1>Hiii This is a my first react page</h1>
        <button onClick={this.switchNameHandler}>Click Here !!</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>my hobby is play a cricket</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>



      </div>
    );
  }

}

 

export default App;
   
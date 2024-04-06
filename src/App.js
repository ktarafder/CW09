/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/

import React, { Component } from 'react'; import './App.css'; import HelloWorld from './HelloWorld'; import Counter from './Counter'; import FilteredList from './FilteredList';

const produce =
[
 {name: "Apple", type: "Fruit"},
 {name: "Pineapple", type: "Fruit"} ,
 {name: "Banana", type: "Fruit"},
 {name: "Pear", type: "Fruit"},
 {name: "Strawberry", type: "Fruit"},
 {name: "Orange", type: "Fruit"},
 {name: "Lettuce", type: "Vegetable"},
 {name: "Cucumber", type: "Vegetable"},
 {name: "Eggplant", type: "Vegetable"},
 {name: "Squash", type: "Vegetable"},
 {name: "Bell pepper", type: "Vegetable"},
 {name: "Onion", type: "Vegetable"},
]; 

class App extends Component { render() {
 return (
 <div className="App">

    <div className='hello_counter'>
      <HelloWorld name={'Kamrul Tarafder'}/>
      <Counter/>
    </div>

<div className='filter'>
    <FilteredList items={produce}/>
</div>
</div>
 );
 }
}
export default App; 

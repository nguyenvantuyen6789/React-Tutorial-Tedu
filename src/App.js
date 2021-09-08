import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person from './components/Person';

function App() {
  const changNameHandler = (e) => {
    console.log(e);
  }
  return (
    <div className="App">
      <h1>This is the first app</h1>
      <button onClick={ (e) => changNameHandler(e) }>Change Name</button>
      <Person name="Tuyên" age="26">Content of Person Tag</Person>
    </div>

    // Cách 2
    // React.createElement(
    //   "div",
    //   {className: "blue"},
    //   React.createElement(
    //     "h1",
    //     {className: "red"},
    //     "List Product"
    //   )
    // )
  )
}

export default App;

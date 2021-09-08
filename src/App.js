import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Person from './components/Person';
import Example from './components/Example';

function App() {
  const changNameHandler = (e) => {
    console.log(e);
  }

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>This is the first app</h1>
      <button onClick={ (e) => changNameHandler(e) }>Change Name</button>
      <Person name="Tuyên" age="26">Content of Person Tag</Person>

      <p>You clicked {count} times</p>
      <button onClick={ () => setCount(count + 1) }>Tăng Count</button>
      <Example></Example>
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

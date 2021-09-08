import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <h1>This is the first app</h1>
      <Person></Person>
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

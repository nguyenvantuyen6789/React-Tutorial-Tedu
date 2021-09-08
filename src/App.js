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

  const [listPerson, setListPerson] = useState([
    {name: "Tedu 1", age: 5},
    {name: "Tedu 2", age: 6},
    {name: "Tedu 3", age: 7}
  ])

  const setToAnotherPerson = () => {
    console.log("to another p");
    setListPerson([
      {name: "Tedu 4.5", age: 10},
      {name: "Tedu 6", age: 11},
      {name: "Tedu 8", age: 12}
    ])
  }

  return (
    <div className="App">
      <h1>This is the first app</h1>
      <button onClick={(e) => changNameHandler(e)}>Change Name</button>
      <Person name="Tuyên" age="26">Content of Person Tag</Person>

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Tăng Count</button>
      <Example></Example>

      <h3>Person 1</h3>
      <Person name={listPerson[0].name} age={listPerson[0].age}></Person>
      <button onClick={() => setToAnotherPerson()}>Đổi Person</button>
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

import './App.css';
import React, { useState } from 'react';
import Person from './components/Person';
import Example from './components/Example';
import Button, { LoadingButton, ButtonGroup } from '@atlaskit/button';
import StarFilledIcon from '@atlaskit/icon/glyph/star-filled';

function App() {
  const [showPerson, setShowPerson] = useState(true);
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

  const switcheNameHandler = (e) => {
    console.log("Show Event:");
    console.log(e.target);
    // setListPerson([
    //   {name: "Tedu 4.5", age: 10},
    //   {name: "Tedu 6", age: 11},
    //   {name: "Tedu 8", age: 12}
    // ])
  }

  const togglePerson = (e) => {
    setShowPerson(!showPerson);
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
      <Person clickHere={() => setToAnotherPerson()} name={listPerson[0].name} age={listPerson[0].age}></Person>
      <Person changed={switcheNameHandler} clickHere={setToAnotherPerson} name={listPerson[1].name} age={listPerson[1].age}></Person>
      <button onClick={() => setToAnotherPerson()}>Đổi Person</button>

      <h3>Toggle Person</h3>
      <button onClick={() => togglePerson()}>Toggle Person</button>
      {
        showPerson == true?
        <div>
          <Person name={listPerson[0].name} age={listPerson[0].age}></Person>
        </div>
        : null
      }

      <h3>Button</h3>

      <Button appearance="primary">Submit</Button>
      <Button appearance="primary" isDisabled>Submit</Button>
      <Button appearance="primary" isSelected>Submit</Button>
      <Button appearance="primary" isLoading>Submit</Button>
      <Button appearance="subtle">Nút Khó Thấy</Button>
      <Button appearance="link">Link</Button>
      <Button appearance="warning">Link</Button>
      <Button appearance="danger">Link</Button>
      <Button appearance="danger" iconAfter={<StarFilledIcon label="Star icon" size="small" />}>Icon After</Button>
        
      <h3>Button Full Width</h3>
      
      <Button shouldFitContainer appearance="primary">Full width button</Button>


      <h3>Loading button</h3>
      <LoadingButton appearance="primary">Loading button</LoadingButton>
      <LoadingButton appearance="primary" isLoading>Loading button</LoadingButton>

      <h3>Button Group</h3>
      <ButtonGroup>
        <Button appearance="primary">Default</Button>
        <Button appearance="primary" spacing="compact">
          Compact
        </Button>
        <Button spacing="none" appearance="subtle-link">
          None
        </Button>
      </ButtonGroup>

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

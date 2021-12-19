import './App.css';
import React from 'react';
import Todo from './todo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {

    return (
      <div>
        <Todo />
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    increment: 0
  }
  
  incrementNumber = () => {
    this.setState({
      increment: this.state.increment + 1
    });

  }

  render() {
    const { increment } = this.state;
    return (
      <div>
        <span className="value">{ increment }</span>
        <button id="inc" onClick={this.incrementNumber} >Incrementa</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { hasagi } = this.props.location.state;
    // console.log(hasagi)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
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
        </div>
      </div>
    );
  }
  
}

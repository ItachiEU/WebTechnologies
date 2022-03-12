import React from 'react';
import logo from './logo.svg';
import './App.css';

function HelloWorld() {
  return (
    <div>
      <p className='Inline'>Hello&nbsp;</p>
      <p className='Inline'>World!</p>
    </div>
  );
}

class Logo extends React.Component {
  render() {
    return (
        <img src={logo} className="App-logo" alt="logo" />
    );
  }
}


function App() {
  return(
    <div className="App">
      <header className="App-header">
        <Logo/>
        <HelloWorld/>
      </header>
    </div>
  );
}

export default App;

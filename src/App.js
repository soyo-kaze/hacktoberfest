import React from 'react';
import Icon from './Icon.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Icon} alt="Hacktoberfest Logo" />
        <h1><i>Hacktoberfest Hackers</i></h1>
        <p>Name</p> { /* Copy paste this below and replace "Name" with your own name */ }
      </header>
    </div>
  );
}

export default App;

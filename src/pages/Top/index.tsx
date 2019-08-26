import React from 'react';
import './index.css';

const Top: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src="images/logo.svg" className="App-logo" alt="logo" />
        <p>React 勉強会</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Top;

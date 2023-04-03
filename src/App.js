import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
    useEffect(() => {
   fetch('/app/api/')
   .then(response => setData(response))
  //  .then(data => console.log(data))

   .catch(error => console.error(error));
 }, []);
  return (
    <div className="App">
      <header className="App-header">
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
          
          {data?.data}
          
        </a>
      </header>
    </div>
  );
}

export default App;

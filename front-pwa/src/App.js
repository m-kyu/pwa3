import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  fetch('https://port-0-pwa3-jvvy2blm4a51lv.sel5.cloudtype.app/pwa-push/sendNoti', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          subscription: 1000
        }),
      })
      .then(res=>res.text())
      .then(res=>{
        console.log(res)
      })
  return (
    <div className="App">
      <header className="App-header">
        <button id="doIt">doIt</button>
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
      </header>
    </div>
  );
}

export default App;

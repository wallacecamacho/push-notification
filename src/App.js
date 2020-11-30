import React from 'react';
import icon from './icon.png';
import './App.css';
import { askForPermissioToReceiveNotifications } from './push-notification';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={icon} className="App-logo" alt="icon" />
      <h1 className="App-title">POC - push-notification!</h1>
    </header>
    <button onClick={askForPermissioToReceiveNotifications} >
      Confirme para receber notificações
    </button>
  </div>
);

export default App;

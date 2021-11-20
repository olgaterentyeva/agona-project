import React from 'react';
import './App.css';
import './assets/style.css'
import {SignInForm} from "./components/forms/SignInForm";
import logo from "./images/logo.svg";
import {Switch} from "./components/Switch";

function App() {

  return (
    <div className="App">
        <img src={logo} alt="logotype"/>
        <SignInForm/>
        <Switch />
    </div>
  );
}

export default App;

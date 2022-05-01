// import { useEffect, useState } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Home from "./pages/Home";
import './App.css'


function App() {

  return (
    <div className="container">
      <div className="auth">
        <div className="auth__block">
          <h2 className="auth__title">Register</h2>
          <input className="input auth__name" placeholder='Name..' />
          <input className="input auth__phonenumber" placeholder='Password..' />
          <button className='button auth__button'>Create user</button>
        </div>
      </div>
      <div className='auth__signout'>
        <h2>User Logged in</h2>
        <button className='button'>Sign out</button>
        </div>
      <div className="auth">
        <div className="auth__block">
          <h2 className="auth__title">Login</h2>
          <input className="input auth__name" placeholder='Name..' />
          <input className="input auth__phonenumber" placeholder='Password..' />
          <button className='button auth__button'>Login</button>
        </div>
      </div>

    </div>
  );
}

export default App;

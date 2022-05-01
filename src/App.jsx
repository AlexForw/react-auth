// import { useEffect, useState } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Home from "./pages/Home";
import { useState } from 'react'
import './App.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase-config'


function App() {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  
  const register = async () =>{
    try{
      const user = createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      console.log(user);
    }catch (error){
      console.log(error.message);
    }
  }
  const login = async () =>{}
  const logout = async () =>{}

  return (
    <div className="container">
      <div className="auth">
        <div className="auth__block">
          <h2 className="auth__title">Register</h2>
          <input className="input auth__email" placeholder='Email..' onChange={(event) => setRegisterEmail(event.target.value)}/>
          <input className="input auth__password" placeholder='Password..' onChange={(event) => setRegisterPassword(event.target.value)}/>
          <button className='button auth__button' onClick={register}>Create user</button>
        </div>
      </div>
      <div className='auth__signout'>
        <h2>User Logged in</h2>
        <button className='button'>Sign out</button>
        </div>
      <div className="auth">
        <div className="auth__block">
          <h2 className="auth__title">Login</h2>
          <input className="input auth__email" placeholder='Email..' onChange={(event) => setLoginEmail(event.target.value)}/>
          <input className="input auth__password" placeholder='Password..' onChange={(event) => setLoginPassword(event.target.value)}/>
          <button className='button auth__button'>Login</button>
        </div>
      </div>

    </div>
  );
}

export default App;

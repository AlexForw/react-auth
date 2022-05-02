import { useState } from 'react'
import './App.css'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from './firebase-config'


function App() {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [userName, setUserName] = useState({})


  onAuthStateChanged(auth, (currentUser) =>{
    if (currentUser) {
      setUserName(currentUser)
    }
  })


  const register = async () =>{
    try{
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      console.log(user);
    }catch (error){
      console.log(error.message);
    }
  }
  const login = async () =>{
    try{
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(user);
    }catch (error){
      console.log(error.message);
    }
  }
  const logout = async () =>{
    await signOut(auth)
    setUserName({})
  }

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
        <h2>User Logged in: {userName?.email} </h2>
        <button className='button' onClick={logout}>Sign out</button>
        </div>
      <div className="auth">
        <div className="auth__block">
          <h2 className="auth__title">Login</h2>
          <input className="input auth__email" placeholder='Email..' onChange={(event) => setLoginEmail(event.target.value)}/>
          <input className="input auth__password" placeholder='Password..' onChange={(event) => setLoginPassword(event.target.value)}/>
          <button className='button auth__button' onClick={login}>Login</button>
        </div>
      </div>

    </div>
  );
}

export default App;

import React, { useState } from 'react'

import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

import { app } from '../firebase'

const auth = getAuth(app);

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = ()=>{
    createUserWithEmailAndPassword(auth, email, password).then(value => alert("success"));
  }

  return (
    <div className='signup-page'>
        <label>EMAIL:</label>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='enter your email' required />

        <label>PASSWORD:</label>
        <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder='enter your password' required />

        <button onClick={createUser}>SIGNUP</button>
    </div>
  )
}

export default Signup
import React, { useState } from 'react'

import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

import { app } from '../firebase'

const auth = getAuth(app)

const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInUser = ()=>{
        signInWithEmailAndPassword(auth, email, password).then(value => console.log("sign in success")).catch(err => console.log(err));
    }

  return (
    <div>
        <h1>SIGN IN</h1>

        <label>EMAIL:</label>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='enter your email' required />

        <label>PASSWORD:</label>
        <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder='enter your password' required />

        <button onClick={signInUser} >SIGNIN</button>
    </div>
  )
}

export default Signin
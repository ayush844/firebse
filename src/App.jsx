
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

import {app} from './firebase'

import Signup from './pages/Signup';

import './App.css'
import Signin from './pages/Signin';

const auth = getAuth(app);

function App() {

  const signUpUser = ()=>{
    createUserWithEmailAndPassword(auth, "ayush@gmail.com", "ayushimishra").then((value) => console.log(value));
  }

  return (
    <>
      <Signup/>
      <Signin />
    </>
  )
}

export default App

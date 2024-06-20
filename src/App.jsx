import {getDatabase, ref, set} from 'firebase/database'
import {app} from './firebase'
import './App.css'


const db = getDatabase(app);

function App() {
  
  const putData = ()=>{
    set(ref(db, 'users/ayush'), {
      id: 1,
      name: 'ayush',
      age: 20
    })
  }

  return (
    <>
      <h1>firebase react</h1>
      <button onClick={putData}>put data</button>
    </>
  )
}

export default App

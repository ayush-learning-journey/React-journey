import { useState } from 'react'
import Header from './Header'
import Nav from './Nav'
import Counter from './Counter'
import Mood from './Mood'
import Notes from './Notes'
import './App.css'

function App() {

  const [active, setActive] = useState(null);


  return (
    <>
    <div className='flex flex-row w-full'>
      <Header />
    <Nav setActive={setActive} />
    </div>
   
    {active === "counter" && <Counter />}
    {active === "mood" && <Mood /> }
    {active === "notes" && <Notes /> }
    
      
    </>
  )
}

export default App

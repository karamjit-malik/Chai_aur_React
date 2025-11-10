import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black text-rounded p-4 rounded-xl'>Chai aur react</h1>
    <div className='flex justify-center align-center m-[1rem] p-[2rem] border border-cyan rounded-4xl'>
      <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 h-[full] w-[12rem] rounded-md object-cover "/>
    </div>
    <Cards username="chaiaurcode" btnText="click me" />
    </>
  )
}

export default App

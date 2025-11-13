import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [color, SetColor] = useState("#1f1f1f")

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <footer className='fixed bottom-3 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-md rounded-full py-2 px-4'>
        <div className='flex flex-row justify-evenly w-[70vw]'>
          <button onClick={() => SetColor('red')}>Red</button>
          <button onClick={() => SetColor('blue')}>Blue</button>
          <button onClick={() => SetColor('green')}>Green</button>
          <button onClick={() => SetColor('olive')}>Olive</button>
          <button onClick={() => SetColor('beige')}>Beige</button>
          <button onClick={() => SetColor('#4d5d53')}>Feldgrau</button>
          <button onClick={() => SetColor('#b2beb5')}>Ash gray</button>
        </div>
      </footer>
    </>
  )
}

export default App

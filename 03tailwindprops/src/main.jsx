import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cards from './Cards.jsx'
import Myapp from './Mine.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <div className='flex justify-evenly h-[100vh] w-[90vw] items-center flex-wrap gap-4'>
      <Cards username="chaiaurcode" btnText="click me" />
      <Myapp username='Jujutsu Kaisen' img='Jujutsu_kaisen.jpg'/>
      <Myapp username='My Hero Academia' img='MHA.jpg'/>
      <Myapp username='Demon Slayer' img='img_hashirageiko.jpg'/>
    </div>
    </>
    {/* <App /> */}
  </StrictMode>,
)

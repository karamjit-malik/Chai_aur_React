import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cards from './Cards.jsx'
import Myapp from './Mine.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Hero from './Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <div className="flex flex-col justify-center items-center w-full">
      <Header/>
      <Hero/>
    </div>

    <div className='mb-[20rem] flex justify-center h-[100vh] w-[100vw] items-center flex-wrap gap-4'>
      {/* <Cards username="chaiaurcode" btnText="click me" /> */}
      <Myapp username='Jujutsu Kaisen' img='Jujutsu_kaisen.jpg'/>
      <Myapp username='My Hero Academia' img='MHA.jpg'/>
      <Myapp username='Attack on Titan' img='attack on titan.jpg'/>
      <Myapp username='Demon Slayer' img='img_hashirageiko.jpg'/>
      <Myapp username='Full Metal Alchamist' img='Fullmetal Alchemist.jpeg'/>
      <Myapp username='Hunter x Hunter' img='Hunter x Hunter.jpeg'/>
      <Myapp username='Bleach' img='bleach.jpg'/>
      <Myapp username='Dan da Dan' img='Danda dan.jpg'/>
    </div>
    <Footer/>
    </>
    {/* <App /> */}
  </StrictMode>,
)

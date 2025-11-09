import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'

function MyApp()
{
  return(
    <>
    <h1>Hello ji Bhosad pappu</h1>
    </>
  )
}


const element = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target: '_blank'
    },
    children : 'Click here to visit google'
}


const anotherele = (
  <a href="https://google.com" target='_blank'>Lund Lelo</a>
)

const elem = React.createElement('h1',null,'hello ji')
const element1 = React.createElement('a',
  {
    href: 'https://google.com',
    target: '_blank',
    alt: 'Not working'
  },
  'Google dehkna ??',
  elem
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    //  elem
    // anotherele
    element1
)

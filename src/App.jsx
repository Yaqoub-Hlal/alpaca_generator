import { useState } from 'react'
import './App.css'
import Accessorize from './components/accessorize/Accessorize'
import Alpaca from './components/alpaca/Alpaca'
import Style from './components/style/Style'

function App() {


  return (
    <div className="App">
      <div className='container'>
        <div className='header'>
          <h1>Alpaca Generator</h1>
        </div>
        <div className='content'>
          <Style />
          <Alpaca />
          <Accessorize />
        </div>
      </div>
    </div>
  )
}

export default App

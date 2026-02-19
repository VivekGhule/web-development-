import React from 'react'
import { useState } from 'react'
import NavBar from './components/NavBar'

const Demo = () => {

  const [theme, setTheme] = useState('rgb(2, 6, 23)')

  function applyTheme(params) {
    setTheme(params)
    
  }
  return (
    <div style={{ backgroundColor: theme }} className='min-h-screen w-full'>
      <NavBar theme={applyTheme} />
      <h1 className='absolute top-1/2 left-1/2 -translate-1/2 text-5xl text-white'>This is the Theme {theme}</h1>

    </div>
  )
}

export default Demo
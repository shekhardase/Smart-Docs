import React from 'react'
import Background from './components/background'
import Foreground from './components/Foreground'
import Temp from './components/Temp'


function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background />

      <Foreground />
      {/* <Temp /> */}
    </div>

  )
}

export default App
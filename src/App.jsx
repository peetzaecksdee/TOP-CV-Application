// import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Image from './components/ImageContainer'

function App() {
  return (
    <>
      <header className='header'>
        <Image />
        <AboutMe />
      </header>
      <main className='content'></main>
    </>
  )
}

export default App

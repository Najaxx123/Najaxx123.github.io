import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from "./components/header"
import Hero from "./components/hero"
import Skills from "./components/skills"

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
    </div>
  )
}

export default App

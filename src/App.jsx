import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Components/Counter'
import LoginForm from './Components/LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Zadanie 11.2</h2>
     <Counter />
     <h2>Zadanie 11.3</h2>
     <LoginForm />
    </>
  )
}

export default App

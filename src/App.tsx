import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Homepage from './Homepage'
import Navbar from './page/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

    <main>
      <Routes>
        <Route path="/" element={<Homepage />}>
            <Route index element={<Navbar/>} />
          </Route>
        </Routes>
    </main>
  </div>
  )
}

export default App

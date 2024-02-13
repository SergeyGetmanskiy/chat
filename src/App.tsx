import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signin from './pages/SignIn/Signin'


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
      </Routes>
    </div>

  )
}

export default App

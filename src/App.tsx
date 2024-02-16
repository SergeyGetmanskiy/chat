import { Routes, Route } from 'react-router-dom'
import Signin from './pages/SignIn/Signin'
import Signup from './pages/Signup/Signup'


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>

  )
}

export default App

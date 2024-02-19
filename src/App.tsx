import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Signin from './pages/SignIn/Signin'
import Signup from './pages/Signup/Signup'
import { useEffect } from 'react'
import Main from './pages/Main/Main';


function App() {

  const navigate = useNavigate();
  const {pathname} = useLocation();

  useEffect(() => {
    if(pathname == '/') {
      navigate('/signin')
    }
  }, [pathname, navigate])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>

  )
}

export default App

import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Pages/Home'
import Career from './components/Pages/Career'
import Ccb from './components/Pages/Ccb'
import MyDG from './components/Pages/MyDG'
import WeeklyAds from './components/Pages/WeeklyAds'
import Nav from './components/Nav'
import Register from './components/DetailsView/Register'
import SignIn from './components/DetailsView/SignIn'
import Profile from './components/Pages/Profile'
import { NavLink, Routes, Route } from 'react-router-dom'
import { CheckSession } from './components/services/Auth'
function App() {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      checkToken()
    }
  }, [])


  return (
    <div>
      <header>
        <Nav />
      </header>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/career' element={<Career />} />
          <Route path='/deals' element={<Ccb />} />
          <Route path='/weekly-ads' element={<WeeklyAds />} />
          <Route path='/myDG' element={<MyDG />} />
          <Route path='/signin' element={<SignIn setUser={setUser} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile user={user} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

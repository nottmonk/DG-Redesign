import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Pages/Home'
import Career from './components/Pages/Career'
import Ccb from './components/Pages/Ccb'
import MyDG from './components/Pages/MyDG'
import WeeklyAds from './components/Pages/WeeklyAds'
import Nav from './components/Nav'
import { NavLink, Routes, Route } from 'react-router-dom'

function App() {


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
        </Routes>
      </div>
    </div>
  )
}

export default App

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
import Update from './components/DetailsView/Update'
import Food from './components/Categories/Food'
import AutoMore from './components/Categories/Auto-More'
import BabyApparel from './components/Categories/Baby-Apparel'
import BeautyHealth from './components/Categories/Beauty-Health'
import HouseHold from './components/Categories/HouseHold'
import OfficeToys from './components/Categories/Office-Toys'
import Pet from './components/Categories/Pet'
import { BASE_URL } from './globals'
import axios from 'axios'
function App() {
  const [user, setUser] = useState(null)
  const [products, setProduct] = useState([])




  const getProduct = async () => {
    let response = await axios.get('http://localhost:4000/products')
    console.log(response)
    setProduct(response.data)
  }

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

  useEffect(() => {
    getProduct()
  })




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
          <Route path='/myDG' element={<MyDG user={user} />} />
          <Route path='/signin' element={<SignIn setUser={setUser} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/update' element={<Update user={user} setUser={setUser} />} />
          <Route path='/food' element={<Food products={products} />} />
          <Route path='/household' element={<HouseHold products={products} />} />
          <Route path='/office-toys' element={<OfficeToys products={products} />} />
          <Route path='/pet' element={<Pet products={products} />} />
          <Route path='/beauty-health' element={<BeautyHealth products={products} />} />
          <Route path='/baby-apparel' element={<BabyApparel products={products} />} />
          <Route path='/auto-more' element={<AutoMore products={products} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

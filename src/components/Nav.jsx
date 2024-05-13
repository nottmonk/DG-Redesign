import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/career">Career</NavLink>
            <NavLink to="/myDG">MyDG</NavLink>
            <NavLink to="/weekly-ads">Weekly Ads</NavLink>
            <NavLink to="/deals">Coupons & Cash Back</NavLink>
        </div>
    )
}

export default Nav

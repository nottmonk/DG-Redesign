import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>&nbsp;&nbsp;
            <NavLink to="/career">Career</NavLink>&nbsp;&nbsp;
            <NavLink to="/myDG">MyDG</NavLink>&nbsp;&nbsp;
            <NavLink to="/weekly-ads">Weekly Ads</NavLink>&nbsp;&nbsp;
            <NavLink to="/deals">Coupons & Cash Back</NavLink>&nbsp;&nbsp;
            <NavLink to='/profile'>myProfile</NavLink>&nbsp;&nbsp;
        </div>
    )
}

export default Nav

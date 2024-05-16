import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Select from 'react-select'


const Nav = () => {
    let navigate = useNavigate()

    const handleSelectChange = (selectedOption) => {
        navigate(selectedOption.value)
    }

    const options = [
        { value: '/food', label: "food" },
        { value: '/baby-apparel', label: 'Baby & Apparel' },
        { value: '/office-toys', label: 'Office & Toys' },
        { value: '/pet', label: 'Pet' },
        { value: '/household', label: 'HouseHold' },
        { value: '/beauty-health', label: 'Beauty & Health' },
        { value: 'auto-more', label: 'Auto & Hardware & OutdoorLiving' },


    ]
    return (
        <div>
            <NavLink to="/">Home</NavLink>&nbsp;&nbsp;
            <NavLink to="/career">Career</NavLink>&nbsp;&nbsp;
            <NavLink to="/myDG">MyDG</NavLink>&nbsp;&nbsp;
            <NavLink to="/weekly-ads">Weekly Ads</NavLink>&nbsp;&nbsp;
            <NavLink to="/deals">Coupons & Cash Back</NavLink>&nbsp;&nbsp;
            <NavLink to='/profile'>myProfile</NavLink>&nbsp;&nbsp;
            <Select options={options} onChange={handleSelectChange} placeholder={'Categories'}>


            </Select>
        </div>
    )
}

export default Nav

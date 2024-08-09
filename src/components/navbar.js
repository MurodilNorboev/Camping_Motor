import React from 'react'

import logo from '../assets/Camper.svg'
import cart from '../assets/cart.svg'
import peopl from '../assets/peopl.svg'
import "./stye.css";
import { Link, NavLink } from 'react-router-dom';
import menu from '../assets/menu-icon.svg'
const Navbar = () => {
  return (
    <div className='container'>
      <div className='camperwrapper'>
      <div className='menusicon'>
      <Link to={'Menu-icon1'}><img src={menu} alt='menu-icon'/></Link>
      </div>
         <img src={logo} alt='logo-img' />
      </div>
      <div className='menuwrapper'>
        <Link to={'/motor'}><p>motor</p></Link>
        <Link to={'/caravan'}><p>Caravan</p></Link>
        <Link to={'/Tuning'}><p>Tuning</p></Link>
        <Link to={'/UsedCar'}><p>Used Car</p></Link>
        <Link to={'/CampingPlaceComponent'}><p>Camping place</p></Link>
      </div>
      <div className='imgwrapper'>
      <Link to={'/Cart1'}><img src={cart} alt='cart-img'/></Link>
        <div className='menusicon2'>
        <Link to={'/Menu-icon2'}><img src={menu} alt='menu-icon'/></Link>
      </div>
      <div className='En-none'>
      <Link to={'/People'}><img src={peopl} alt='peopl-img'/></Link>
      <Link to={'/Kiritish'}><p>En</p></Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar
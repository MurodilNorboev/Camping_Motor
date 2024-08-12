import React from 'react'

import logo from '../assets/Camper.svg'
import cart from '../assets/cart.svg'
import peopl from '../assets/peopl.svg'
import "./stye.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container'>
      <div className='camperwrapper'>
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
        <img src={cart} alt='cart-img'/>
        <img src={peopl} alt='peopl-img'/>
        <p>En</p>
      </div>
    </div>
  )
}

export default Navbar
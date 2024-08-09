import React from 'react'
import { Link } from 'react-router-dom'
import './stye.css';

const Footer = () => {
  return (
    <div className='container2'>
        <div className='xxx'></div>
        <div className='fonwrapper'> 
            <div className='fonwrapper2'></div>
            <div className='midlmenuwrapper'>
            <Link to={'/Home-Motors'}><p className='h6'>Home / Motors</p></Link>
            <Link to={'/Our-ranges'}><p className='h5'>Our ranges</p></Link>
            <Link to={'/Motours'}><p className='h3'>Motours</p></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer
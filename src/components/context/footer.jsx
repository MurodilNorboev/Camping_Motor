import React from 'react'

import Youtube from '../../assets/youtube.svg'
import Instagram from '../../assets/instagram.svg'
import Naver from '../../assets/naver.svg'
import { Footerd } from '../styles/FoterStyle'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { useLocation } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material'
const Footer = () => {

//   const location = useLocation();
// const hideSidebar = location.pathname === "/login";


  return (
    <div>
            {/* <CssVarsProvider disaableTransitionOnChange>
      <CssBaseline/>
      <Box sx={{display: "none"}}>
        {/* {!hideSidebar && <Navbar/>} */}
        {/* {!hideSidebar && <Footer/>}  */}

        <Footerd className='FooterContainer'> 
     

     <div className='footer-menus'>
     <div className='footer-mini-con-0-1'><h1>Logo</h1></div>
     <div className='footer-mini-con-0'><h1>Camper</h1></div>
       <div className='footer-mini-con'>
       <h2>Services</h2>
       <div className='footer-mini-con-1'>
       <h3>Camping</h3>
       <h3>Lodging</h3>
       <h3>Harbor</h3>
       <h3>Day Use</h3>
       </div>
     </div>
     <div className='footer-mini-con'>
       <h2>Menu</h2>
       <div className='footer-mini-con-1'>
       <h3>About</h3>
       <h3>Services</h3>
       <h3>Booking</h3>
       <h3>Blog</h3>
       </div>
     </div>
     <div className='footer-mini-con'>
       <h2>Contact</h2>
       <div className='footer-mini-con-1'>
       <div className='footer-mini-con-img'>
         <img src={Youtube}/>
         <img src={Instagram}/>
         <img src={Naver}/>
       </div>
       <h3>021 Korea Seul A</h3>
       <h3>camper@example.com</h3>
       <h3>(021) 345-6789-99</h3>
     </div>
     </div>
     <div className='footer-mini-con-img-2'>
         <img src={Youtube}/>
         <img src={Instagram}/>
         <img src={Naver}/>
       </div>
     </div>
    
       </Footerd>
       {/* </Box>
       </CssVarsProvider> */}
    </div>
  )
}

export default Footer

import { Navbar, IconWrapper, Logowrapper,  MenuWrapper, NavLink, Navbarlang } from '../styles/style'
import cart from '../../assets/cart.svg'
import peopl from '../../assets/peopl.svg'
import Iconpastle from '../../assets/iconpastle.svg'
import menuIcon from '../../assets/menu-icon.svg'
import { Link } from 'react-router-dom'
import Menus_Icon from './menuicon'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'


const  Navbard = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <>
    <Navbar> 

      <div className='to_wrapt'> <Logowrapper className='Logowrapper'>  
          <Menus_Icon className="menu-Icon"/>
           </Logowrapper> <Link to={'/'} style={{textDecoration:'none',color:'#006DAB'}}> <div className='logoerapper2'>Camper</div></Link></div>
         

       
       
       
         
        <MenuWrapper className='MenuWrapper'> 
            <NavLink to={"/motor"} style={{textDecoration:'none',color:'black'}}> <div>Motor</div></NavLink>
            <NavLink to={"/caravan"} style={{textDecoration:'none',color:'black'}}> <div>Caravan</div>   </NavLink>
            <NavLink to={"/tuning"} style={{textDecoration:'none',color:'black'}}> <div>Tuning</div>  </NavLink>
            <NavLink to={"/used-Car"} style={{textDecoration:'none',color:'black'}}>   <div>Used Car</div> </NavLink>
            <NavLink to={"/camping-Plase"} style={{textDecoration:'none',color:'black'}}>   <div>Camping place</div>  </NavLink>
        </MenuWrapper>

        <div className='right_menus'><img className='cart_img' src={cart}  alt='cart'/>
              <Logowrapper className='Logowrapper3'>  
              <Menus_Icon className="menu-Icon"/>
              </Logowrapper></div>
              
        <IconWrapper className='IconWrapper'>
            <img  src={cart}  alt='cart'/>
            <NavLink to={'/login'}  style={{textDecoration:'none',color:'black'}}>
            <div className='login'><img  src={peopl} alt='peopl' /></div>
            </NavLink>

            < Navbarlang>
            En <img src={Iconpastle} alt='Icon'/>
            </Navbarlang>
        </IconWrapper>
    </Navbar>

    </>
  )
}

export default Navbard




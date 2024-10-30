
import { Navbar, IconWrapper, Logowrapper,  MenuWrapper, NavLink, Navbarlang } from '../styles/style'
import cart from '../../assets/cart.svg'
import peopl from '../../assets/peopl.svg'
import { Link } from 'react-router-dom'
import Menus_Icon from './menuicon'
import { useState } from 'react'
import MenuComponent from '../menu/menus'
import Tajriba from '../folder_tajriba/tajriba'


const  Navbard = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <>
    <Navbar> 

      <div className='to_wrapt'> 

        <Logowrapper className='Logowrapper'>  
          <Menus_Icon className="menu-Icon"/>
        </Logowrapper> 

           <Link to={'/'} style={{textDecoration:'none',color:'#006DAB'}}> <div className='logoerapper2'>Camper</div></Link>
      </div>
         

       
       
       
         
        <MenuWrapper className='MenuWrapper'> 
            <NavLink to={"/motor"} style={{textDecoration:'none',color:'black'}}> <div>Motor</div></NavLink>
            <NavLink to={"/caravan"} style={{textDecoration:'none',color:'black'}}> <div>Caravan</div>   </NavLink>
            <NavLink to={"/tuning"} style={{textDecoration:'none',color:'black'}}> <div>Tuning</div>  </NavLink>
            <NavLink to={"/used-Car"} style={{textDecoration:'none',color:'black'}}>   <div>Used Car</div> </NavLink>
            <NavLink to={"/camping-Plase"} style={{textDecoration:'none',color:'black'}}>   <div>Camping place</div>  </NavLink>
        </MenuWrapper>

        <div className='right_menus'>

          <Link><img className='cart_img' src={cart}  alt='cart'/></Link>

              <Logowrapper className='Logowrapper3'>  
              <Menus_Icon className="menu-Icon"/>
              </Logowrapper>

        </div>
             
        <IconWrapper className='IconWrapper'>

            <div style={{border:'1p px solid red'}}><Tajriba/></div>

            <NavLink to={'/login'}  style={{textDecoration:'none',color:'black'}}>
            <div className='login'><img  src={peopl} alt='peopl' /></div>
            </NavLink>

            < Navbarlang>
            En<MenuComponent />
            </Navbarlang>
            
        </IconWrapper>
    </Navbar>

    </>
  )
}

export default Navbard
// <img src={cart} alt="" />
//<img  src={cart}  alt='cart'/>


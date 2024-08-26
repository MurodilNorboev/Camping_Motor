
import { Navbar, IconWrapper, Logowrapper, MenuIcon, MenuWrapper, NavLink, Navbarlang } from '../styles/style'
import cart from '../../assets/cart.svg'
import peopl from '../../assets/peopl.svg'
import Iconpastle from '../../assets/iconpastle.svg'
import menuIcon from '../../assets/menu-icon.svg'


const  Navbard = () => {
  return (
    <>
    <Navbar> 
          <Logowrapper className='Logowrapper'>  
          <MenuIcon className='menu-Icon'><img src={menuIcon} alt='menu-Icon'/></MenuIcon>
          Camper 
          </Logowrapper>
        <MenuWrapper className='MenuWrapper'> 
            <NavLink to={"/motor"} style={{textDecoration:'none',color:'black'}}> <div>motor</div></NavLink>
            <NavLink to={"/caravan"} style={{textDecoration:'none',color:'black'}}> <div>Caravan</div>   </NavLink>
            <NavLink to={"/tuning"} style={{textDecoration:'none',color:'black'}}> <div>Tuning</div>  </NavLink>
            <NavLink to={"/used-Car"} style={{textDecoration:'none',color:'black'}}>   <div>Used Car</div> </NavLink>
            <NavLink to={"/camping-Plase"} style={{textDecoration:'none',color:'black'}}>   <div>Camping place</div>  </NavLink>
        </MenuWrapper>
              <MenuIcon className='menu-Icon-mobil'>
              <img src={cart}  alt='cart'/>
              <img src={menuIcon} alt='menu-Icon'/>
              </MenuIcon>
        <IconWrapper className='IconWrapper'>
            <img src={cart}  alt='cart'/>

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




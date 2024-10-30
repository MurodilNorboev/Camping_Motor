import React, { useState } from 'react'
import { Leftmenu, BigContainer, MiniMidlCon,  RightMenuWrapper, RightNavbar, Leftmenus,  NavbarMenul, } from './motor-style'
import { Bacfon, Bacmenu } from './bacStyle'
import minimenu1 from '../../assets/menu1.svg'
import minimenu2 from '../../assets/menu2.svg'
import icon1 from '../../assets/iconpastle.svg'
import icon2 from '../../assets/iconpastle.svg'
import UstateComponent from './ustates_menu/ustate'
import UstatetrumenuComponent from './ustates_menu/ustatetrumenu'
import AccordionUsage from '../mainPage/pupob/pupopCon'
import menu from '../../assets/menu-icon.svg'
import TajribaComponent from '../context/sljsf'



const Motorcomponent = () => {

  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const [active, setActive] = useState(true);

  function handleClick() {
    setActive(true);
  }
  function handleSetClick(){
    setActive(false);
  }

  return (
    <BigContainer> 

      <Bacfon className='bac-img'>

        <Bacmenu>
          <h5>Home / Motors</h5>
          <h4>Our ranges</h4>
          <h2>Motors</h2>
        </Bacmenu>

      </Bacfon>

      <MiniMidlCon className='MiniMidlCon'>

         <Leftmenu className='Leftmenu'>
             <AccordionUsage />
         </Leftmenu>

         <RightMenuWrapper>
          
          <RightNavbar className='RightNavbar'> 
            
          <NavbarMenul className='NavbarMenul'>
            <div>
            <div className="Tajriba"><TajribaComponent  onClick={handleDrawerToggle} /></div>
            </div>
            <div className='navbar-menus-1'><h2>Item</h2><h3>25.156</h3></div>

            <div  className='navbar-menus-7'>
            <div className='navbar-menus-9' onClick={handleClick}> <img src={minimenu1} alt='mini-menu1'/></div>
            <div className='navbar-menus-5' onClick={handleSetClick}> <img src={minimenu2} alt='mini-menu2'/></div>
              </div>

              </NavbarMenul>
              
            <div className='navbar-menus'>
           
              <div className='navbar-menus-2'>
                <h3>sort by</h3>
                <input type='text' placeholder='Select'/> 
                <div className='input-pastle'><img src={icon1} alt='icon1'/></div>
              </div>
              <div  className='navbar-menus-3'>
                <input type='text' placeholder='60'/><div>
                <div className='input-pastle01'><img src={icon2} alt='icon1'/></div>
                </div>
                
              </div>

              <div  className='navbar-menus-4'>
               <div className='navbar-menus-9' onClick={handleClick}> <img src={minimenu1} alt='mini-menu1'/></div>
               <div className='navbar-menus-5' onClick={handleSetClick}> <img src={minimenu2} alt='mini-menu2'/></div>

            </div>
            </div>
          </RightNavbar>

          {active ? <UstatetrumenuComponent/> : <UstateComponent/>} 
          </RightMenuWrapper>

      </MiniMidlCon>
      
    </BigContainer>
  )
}

export default Motorcomponent
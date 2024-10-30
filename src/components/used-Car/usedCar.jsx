import React, { useState } from 'react'
import { BacmenuUsedCar, LeftCon, MidlCon, NavbarMenul, RightCon, RightMenuWrapper, RihtNavbarCon, UsedCarCon } from './usedStyle'
import { Bacfon } from '../motor/bacStyle'
import miniImg1 from '../../assets/moto1.svg'
import miniImg2 from '../../assets/moto2.svg'
import miniImg3 from '../../assets/moto3.svg'
import minimenu1 from '../../assets/menu1.svg'
import minimenu2 from '../../assets/menu2.svg'
import icon1 from '../../assets/iconpastle.svg'
import icon2 from '../../assets/iconpastle.svg'
import pastle from '../../assets/iconpastle.svg'
import { ButtonA } from '../caravan/style01'
import UsHmenu from './ustateUsedCar/UsHmenu'
import Usvmenu from './ustateUsedCar/Usvmenu'
import AccordionUsageused from './udedmodals/usedmodalss'
import AccordionUsage from '../mainPage/pupob/pupopCon'


const UsedCarComponent = () => {

    const [activa, setactiva] = useState(true);
    function Ushmenuclick() {
        setactiva(true)
    }
    function Usvmenuclick() {
        setactiva(false)
    }
  return (
    <UsedCarCon>
      < Bacfon className='bac-imgUsed-Car'>
      <BacmenuUsedCar>
          <h5>Home / Motors</h5>
          <h4>Our ranges</h4>
          <h2>Used Car</h2>
      </BacmenuUsedCar>
      </Bacfon>

      <MidlCon className='MidlCon'>
        <LeftCon className="left-Con">
        <AccordionUsage />
        </LeftCon>

        <RightCon className="right-Con">

        <RightMenuWrapper className='RightMenuWrapper'>

          <RihtNavbarCon className='RihtNavbarCon'> 
            
          <NavbarMenul className='NavbarMenul'>
            <div className='navbar-menus-1'><h2>Item</h2><h3>25.156</h3></div>

            <div  className='navbar-menus-7'>
            <div className='navbar-menus-05' onClick={Ushmenuclick}><img src={minimenu1} alt='mini-menu1'/></div>
            <div className='navbar-menus-5'  onClick={Usvmenuclick}><img src={minimenu2} alt='mini-menu2'/></div>
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
                <div className='navbar-menus-05' onClick={Ushmenuclick}><img src={minimenu1} alt='mini-menu1'/></div>
                <div className='navbar-menus-5'  onClick={Usvmenuclick}><img src={minimenu2} alt='mini-menu2'/></div>
              </div>

            </div>

          </RihtNavbarCon>
          
          {activa ? <UsHmenu/> : <Usvmenu/>}

         </RightMenuWrapper>

        </RightCon>
        </MidlCon>
    </UsedCarCon>
  )
}

export default UsedCarComponent
import React, { useState } from 'react'
import { Leftmenu, BigContainer, MiniMidlCon,  RightMenuWrapper, RightNavbar, Leftmenus,  NavbarMenul, } from './motor-style'
import { Bacfon, Bacmenu } from './bacStyle'
import miniImg1 from '../../assets/moto1.svg'
import miniImg2 from '../../assets/moto2.svg'
import miniImg3 from '../../assets/moto3.svg'
import minimenu1 from '../../assets/menu1.svg'
import minimenu2 from '../../assets/menu2.svg'
import icon1 from '../../assets/iconpastle.svg'
import icon2 from '../../assets/iconpastle.svg'
import { RightMenu } from './motor-style'
import { ButtonA } from '../caravan/style01'
import UstateComponent from './ustates_menu/ustate'
import UstatetrumenuComponent from './ustates_menu/ustatetrumenu'

const Motorcomponent = () => {

  const [active, setActive] = useState(true);

  function handleClick() {
    setActive(true);
  }
  function handleSetClick(){
    setActive(false);
  }

  return (
    <BigContainer><div className='navbar-2'></div>
      <Bacfon className='bac-img'>
        <Bacmenu>
          <h5>Home / Motors</h5>
          <h4>Our ranges</h4>
          <h2>Motors</h2>
        </Bacmenu>
      </Bacfon>
      <MiniMidlCon className='MiniMidlCon'>

         <Leftmenu className='Leftmenu'>
          <Leftmenus>
            <div className='menus-Wrapper'>Cost of car</div>
            <div className='input-wrapper-1'>
            <div className='input-wrapper-2'> <label>from</label> <input/> </div>
            <div className='input-wrapper-2'> <label>to</label> <input/> </div>
            </div>
          </Leftmenus>
          <Leftmenus>
            <div className='menus-Wrapper'>Brand</div>
            <div className='input-wrapper'>
            <div><input type='checkbox'/><label> Aidal</label></div>
            <div><input type='checkbox'/> <label>Knal</label></div>
            <div><input type='checkbox'/> <label>escape</label></div>
            </div>
          </Leftmenus>
          <Leftmenus>
            <div className='menus-Wrapper'>Company</div>
            <div className='input-wrapper'>
            <div> <input type='checkbox'/> <label>escape</label></div>
            <div><input type='checkbox'/> <label>Aidal</label></div>
            </div>
          </Leftmenus>
          <Leftmenus>
            <div className='menus-Wrapper'>License type</div>
            <div className='input-wrapper'>
            <div> <input type='checkbox'/> <label>1 year</label></div>
            <div><input type='checkbox'/> <label>2 year</label></div>
            <div> <input type='checkbox'/> <label>1.5 year</label></div>
            </div>
          </Leftmenus>
          <Leftmenus>
            <div className='menus-Wrapper'>Number of travelers</div>
            <div className='input-wrapper'>
            <div>  <input type='checkbox'/> <label>2</label></div>
            <div>  <input type='checkbox'/> <label>3-4</label></div>
            <div>  <input type='checkbox'/> <label>5++</label></div>
            </div>
          </Leftmenus>
          <Leftmenus>
            <div className='menus-Wrapper'>Location</div>
            <div className='input-wrapper'>
            <div> <input type='checkbox'/> <label>Seul</label></div>
            <div><input type='checkbox'/> <label>Korea</label></div>
            <div> <input type='checkbox'/> <label>Pusan</label></div>
            </div>
          </Leftmenus>
          <Leftmenus>
          <div className="leftMenu1">
                <div className="butwrap0"><ButtonA  $second>Cansel</ButtonA></div>
                <div className="butwrap"><ButtonA >Search</ButtonA></div>

            </div>
            </Leftmenus><div>
            <div className="leftMenu2">
            <div className='Comparelang'>Compare</div>
            <div className='mini-car'>
              <img src={miniImg1} alt='mini-img-car1' style={{width:"75px"}}/>
              <img src={miniImg2} alt='mini-img-car2' style={{width:"75px"}}/>
              <img src={miniImg3} alt='mini-img-car3' style={{width:"75px"}}/>
            </div>
            </div>
            </div>
         </Leftmenu>

         <RightMenuWrapper>
          
          <RightNavbar className='RightNavbar'> 
            
          <NavbarMenul className='NavbarMenul'>
            <div className='navbar-menus-1'><h2>Item</h2><h3>25.156</h3></div>

            <div  className='navbar-menus-7'>
                <div className='navbar-menus-9'><img src={minimenu1} alt='mini-menu1'/></div>
                <div className='navbar-menus-5'><img src={minimenu2} alt='mini-menu2'/></div>
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
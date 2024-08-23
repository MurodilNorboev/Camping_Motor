import React, { useState } from 'react'
import { Bacfon, Bacmenu } from '../motor/bacStyle'
import { BacmenuTuning, LeftCon, MidlCon, NavbarMenul, RightCon, RightMenuWrapper, RihtNavbarCon, TuningCon } from './stuningstyle'
import miniImg1 from '../../assets/moto1.svg'
import miniImg2 from '../../assets/moto2.svg'
import miniImg3 from '../../assets/moto3.svg'
import minimenu1 from '../../assets/menu1.svg'
import minimenu2 from '../../assets/menu2.svg'
import icon1 from '../../assets/iconpastle.svg'
import icon2 from '../../assets/iconpastle.svg'
import pastle from '../../assets/iconpastle.svg'
import { ButtonA } from '../caravan/style01'
import Thmenu from './tuningUstate/Thmenu'
import Tvmenu from './tuningUstate/Tvmenu'

const AComponent = () => {


    const [actives, setactives] = useState(true);

    function Thmenuclick() {
        setactives(true)
    }
    function Tvmenucick() {
        setactives(false)
    }
  return (
    <TuningCon>

         < Bacfon className='bac-imgTuning'>
        <BacmenuTuning>
        <Bacmenu>
          <h5>Home / Motors</h5>
          <h4>Our ranges</h4>
          <h2>Tuning</h2>
        </Bacmenu>
        </BacmenuTuning>
        </Bacfon>

        <MidlCon className='MidlCon'>
        <LeftCon className="left-Con">
            <div className="leftMenu0">
                    <h3>Cost of car</h3>
                    <div className="inputwrap">
                        <div className='wrap'>
                           <label>from</label>
                            <input type="text" /> 
                        </div>
                        <div  className='wrap'>
                            <label>to</label>
                            <input type="text" />
                        </div>
                    </div>
            </div>
            <div className="leftMenu">
            <h3>Brand <img src={pastle} alt="check" /></h3>
                    <div className="inputwrap0">
                        <div className='wrap0'>
                            <input type={'checkbox'} /><label>Aidal</label>
                        </div>
                        <div  className='wrap0'>
                            <input type={'checkbox'} /><label>Knal</label>
                        </div>
                        <div  className='wrap0'>
                            <input type={'checkbox'} /><label>escape</label>
                        </div>
                    </div>
            </div>
            <div className="leftMenu0">
            <h3>Compant <img src={pastle} alt="check" /></h3>
                    <div className="inputwrap0">
                        <div className='wrap0'>
                            <input type={'checkbox'} /><label>escape</label>
                        </div>
                        <div  className='wrap0'>
                            <input type={'checkbox'} /><label>Aidal</label>
                        </div>
                    </div>
            </div>
            <div className="leftMenu">
            <h3>License type <img src={pastle} alt="check" /></h3>
                    <div className="inputwrap0">
                        <div className='wrap0'>
                            <input type={'checkbox'} /><label>1 year</label>
                        </div>
                        <div  className='wrap0'>
                            <input type={'checkbox'} /><label>2 year</label>
                        </div>
                        <div  className='wrap0'>
                            <input type={'checkbox'} /><label>1.5 year</label>
                        </div>
                    </div>
            </div>
            <div className="leftMenu">
            <h3>Numpar of travelers <img src={pastle} alt="check" /></h3>
                    <div className="inputwrap0">
                        <div className='wrap0'>
                            <input type={'checkbox'} /><label>2</label>
                        </div>
                        <div  className='wrap0'>
                            <input type={'checkbox'} /><label>3-4</label>
                        </div>
                        <div  className='wrap0'>
                            <input type={'checkbox'} /><label>5++</label>
                        </div>
                    </div>
            </div>
            <div className="leftMenu">
            <h3>Location <img src={pastle} alt="check" /></h3>
                    <div className="inputwrap0">
                        <div className='wrap0'>
                            <input type={'checkbox'} /><label>Seoul</label>
                        </div>
                        <div  className='wrap0'>
                            <input type={'checkbox'} /><label>Korea</label>
                        </div>
                        <div  className='wrap0'>
                            <input type={'checkbox'} /><label>Pusan</label>
                        </div>
                    </div>
            </div>
            <div className="leftMenu1">
                <div className="butwrap0"><ButtonA  $second>Cansel</ButtonA></div>
                <div className="butwrap"><ButtonA >Search</ButtonA></div>
            </div>
            <div className="leftMenu">
            <div className='Comparelang'>Compare</div>
            <div className='mini-car'>
              <img src={miniImg1} alt='mini-img-car1' style={{width:"75px"}}/>
              <img src={miniImg2} alt='mini-img-car2' style={{width:"75px"}}/>
              <img src={miniImg3} alt='mini-img-car3' style={{width:"75px"}}/>
            </div>
            </div>
        </LeftCon>

        <RightCon className="right-Con">

        <RightMenuWrapper className='RightMenuWrapper'>

          <RihtNavbarCon className='RihtNavbarCon'> 
            
          <NavbarMenul className='NavbarMenul'>
            <div className='navbar-menus-1'><h2>Item</h2><h3>25.156</h3></div>

            <div  className='navbar-menus-7'>
            <div className='navbar-menus-05' onClick={Thmenuclick}><img src={minimenu1} alt='mini-menu1'/></div>
                <div className='navbar-menus-5'  onClick={Tvmenucick}><img src={minimenu2} alt='mini-menu2'/></div>
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
                <div className='navbar-menus-05' onClick={Thmenuclick}><img src={minimenu1} alt='mini-menu1'/></div>
                <div className='navbar-menus-5'  onClick={Tvmenucick}><img src={minimenu2} alt='mini-menu2'/></div>
              </div>

            </div>

          </RihtNavbarCon>
         {actives ?   <Thmenu/> :<Tvmenu/>}
          

         </RightMenuWrapper>

        </RightCon>
        </MidlCon>
    </TuningCon>
  )
}

export default AComponent
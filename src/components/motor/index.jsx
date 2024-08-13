import React from 'react'
import { Leftmenu, BigContainer, MiniMidlCon,  RightMenuWrapper, RightNavbar, RightMenu, Menus, Leftmenus, Minibutton, ButtonWrapper, NavbarMenul, ButtonTo, ButtonWrap } from './motor-style'
import { Bacfon, Bacmenu } from './bacStyle'
import { FooterContainer } from './footerStyle'
import miniImg1 from '../../assets/moto1.svg'
import miniImg2 from '../../assets/moto2.svg'
import miniImg3 from '../../assets/moto3.svg'
import minimenu1 from '../../assets/menu1.svg'
import minimenu2 from '../../assets/menu2.svg'
import icon1 from '../../assets/iconpastle.svg'
import icon2 from '../../assets/iconpastle.svg'
import car1 from '../../assets/car1.svg'
import car2 from '../../assets/car2.svg'
import car3 from '../../assets/car3.svg'
import car4 from '../../assets/car4.svg'
import car5 from '../../assets/car5.svg'
import car6 from '../../assets/car6.svg'
import car7 from '../../assets/car7.svg'
import car8 from '../../assets/car8.svg'
import stark from '../../assets/stark.svg'
import Youtube from '../../assets/youtube.svg'
import Instagram from '../../assets/instagram.svg'
import Naver from '../../assets/naver.svg'

const Motorcomponent = () => {
  return (
    <BigContainer><div className='navbar-2'></div>

      <Bacfon className='bac-img'>
        <Bacmenu>
          <h5>Home / Motors</h5>
          <h4>Our ranges</h4>
          <h2>Motors</h2>
        </Bacmenu>
      </Bacfon>

      <MiniMidlCon>

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
            <div><input type='checkbox'/><label>Aidal</label></div>
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
          <ButtonWrapper>
            <div className='button-wrapper'>
            <div className='button-w-1'> <Minibutton>Cancel</Minibutton></div>
            <div className='button-w-1'> <Minibutton $second>Search</Minibutton></div>
            </div>
          </ButtonWrapper>
          <Leftmenus>
            <div className='Comparelang'>Compare</div>
            <div className='mini-car'>
              <img src={miniImg1} alt='mini-img-car1' style={{width:"75px"}}/>
              <img src={miniImg2} alt='mini-img-car2' style={{width:"75px"}}/>
              <img src={miniImg3} alt='mini-img-car3' style={{width:"75px"}}/>
            </div>
          </Leftmenus>
         </Leftmenu>

         <RightMenuWrapper>

          <RightNavbar className='RightNavbar'> 
            
          < NavbarMenul>
            <div className='navbar-menus-1'><h2>Item</h2><h3>25.156</h3></div>

            <div  className='navbar-menus-7'>
                <img src={minimenu1} alt='mini-menu1'/>
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
                <img src={minimenu1} alt='mini-menu1'/>
                <div className='navbar-menus-5'><img src={minimenu2} alt='mini-menu2'/></div>
              </div>

            </div>
          </RightNavbar>

          <RightMenu className='RightMenu'>


          
            <Menus className='a'>
              <div><img src={car1}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap className='ButtonWrap'>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>
            <Menus className='s'>
               <div><img src={car2}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>
            <Menus className='d'>
               <div><img src={car3}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>
            <Menus className='f'>
               <div><img src={car4}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>
            <Menus className='g'>
               <div><img src={car5}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>
            <Menus className='h'>
               <div><img src={car6}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>
            <Menus className='j'>
               <div><img src={car7}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>
            <Menus className='k'>
               <div><img src={car8}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>

            <Menus className='l'>
               <div><img src={car1}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>
            <Menus className='z'>
               <div><img src={car1}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>
            <Menus className='x'>
               <div><img src={car1}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>
            <Menus className='c'>
               <div><img src={car1}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>

            <Menus className='v'>
               <div><img src={car1}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>
            <Menus className='b'>
               <div><img src={car1}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>
            <Menus className='n'>
               <div><img src={car1}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>
            <Menus className='m'>
               <div><img src={car1}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>
            <Menus className='q'>
               <div><img src={car1}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>
            <Menus className='w'>
               <div><img src={car1}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>
            <Menus className='e'>
               <div><img src={car1}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>
            <Menus className='r'>
               <div><img src={car1}/></div>
              <div className='Menus-and'>
              <h4>Name of the car</h4>
              <h5 className='Brand'>Brand name <h5><img src={stark}/>5.3</h5></h5>
              <h2>250 $</h2>
              <ButtonWrap>
                <ButtonTo>Order</ButtonTo>
                <ButtonTo $second>Compare</ButtonTo>
              </ButtonWrap>
              </div>
            </Menus>


          </RightMenu>
         </RightMenuWrapper>

      </MiniMidlCon>

      <FooterContainer className='FooterContainer'> 
     

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
       
      </FooterContainer>

    </BigContainer>
  )
}

export default Motorcomponent
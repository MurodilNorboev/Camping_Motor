import React from 'react'
import { Link } from 'react-router-dom';
import moto1 from '../assets/moto1.svg';
import moto2 from '../assets/moto2.svg';
import moto3 from '../assets/moto3.svg';
import iconpastle from '../assets/iconpastle.svg';
import menu1 from '../assets/menu1.svg';
import menu2 from '../assets/menu2.svg';
import car1 from '../assets/car1.svg'
import stark from '../assets/stark.svg'
import car2 from '../assets/car2.svg'
import car3 from '../assets/car3.svg'
import car4 from '../assets/car4.svg'
import car5 from '../assets/car5.svg'
import car6 from '../assets/car6.svg'
import car7 from '../assets/car7.svg'
import car8 from '../assets/car8.svg'
import youtube from '../assets/youtube.svg'
import Instagram from '../assets/instagram.svg'
import Naver from '../assets/naver.svg'

const Midl = () => {
  return ( 
  <div className='container3-wrepper'>
    <div className='container3'>
        <div className='sidebar'>
            <div className='sidebarmenu1'>
                <div className='inputtype'>Cost of car</div>
                <div className='inputtypes2'> 
                    <div className='inputtypes1'>
                <label>from</label>
                <input type='text' name="from"></input></div>
                <div className='inputtypes1'>
                <label>to</label>
                <input type='text' name="to"></input></div></div> 
            </div>
            <div className='sidebarmenu'>
                <div className='inputtype'>Band</div>
                <div className='inputtypes'>
                    <input type='checkbox' name="Aidal"></input>
                    <label>Aidal</label> <br></br></div> 
                    <div className='inputtypes'>
                    <input type='checkbox' name="Aidal"></input>
                    <label>Knal</label>  <br></br> </div>
                    <div className='inputtypes'>
                    <input type='checkbox' name="Aidal"></input>
                    <label>escape</label>
                </div>
            </div>
            <div className='sidebarmenu2'>
                <div className='inputtype'>Company</div>
                <div className='inputtypes'>
                    <input type='checkbox' name="Aidal"></input>
                    <label>escape</label> <br></br></div> 
                    <div className='inputtypes'>
                    <input type='checkbox' name="Aidal"></input>
                    <label>Aidal</label>  <br></br> </div>
            </div>
            <div className='sidebarmenu'>
                <div className='inputtype'>Litcense type</div>
                <div className='inputtypes'>
                    <input type='checkbox' name="Aidal"></input>
                    <label>1 year</label> <br></br></div> 
                    <div className='inputtypes'>
                    <input type='checkbox' name="Aidal"></input>
                    <label>2 year</label>  <br></br> </div>
                    <div className='inputtypes'>
                    <input type='checkbox' name="Aidal"></input>
                    <label>1.5 year</label>
                </div>
            </div>
            <div className='sidebarmenu'>
                <div className='inputtype'>Number of travelers</div>
                <div className='inputtypes'>
                    <input type='checkbox' name="Aidal"></input>
                    <label>2</label> <br></br></div> 
                    <div className='inputtypes'>
                    <input type='checkbox' name="Aidal"></input>
                    <label>3-4</label>  <br></br> </div>
                    <div className='inputtypes'>
                    <input type='checkbox' name="Aidal"></input>
                    <label>5++</label>
                </div>
            </div>
            <div className='sidebarmenu'>
                <div className='inputtype'>Location</div>
                <div className='inputtypes'>
                    <input type='checkbox' name="Aidal"></input>
                    <label>Soul</label> <br></br></div> 
                    <div className='inputtypes'>
                    <input type='checkbox' name="Aidal"></input>
                    <label>Korea</label>  <br></br> </div>
                    <div className='inputtypes'>
                    <input type='checkbox' name="Aidal"></input>
                    <label>Pusan</label>
                </div>
            </div>
            <div className='sidebarmenu3'>
                <Link to={'/Canselbutton'}><div className='buttonC'><button>Cansel</button></div></Link>
                <Link to={'/Searchbutton'}><div className='buttonS'><button>Search</button></div></Link>
            </div>
        <div className='sidebar2'>
            <div className='Compare'>Compare</div>
            <div className='Compare-img'>
                <img src={moto1} alt='img-moto1' style={{width:'85px', height:'99px'}}/>
                <img src={moto2} alt='img-moto2' style={{width:'85px', height:'99px'}}/>
                <img src={moto3} alt='img-moto3' style={{width:'85px', height:'99px'}}/>
            </div>
        </div>
        </div>
        <div className='midlbar'>
            <div className='navbar2'> 
                <div className='navbar2wrapper'>
                <div className='navbarmenus'>
                    <h5>Item</h5>
                    <h6>25.156</h6>
                </div>
                <div className='menuwrapper4'>
                    <Link to={"/img1"}><div className='img1'><img src={menu1} alt='img-menu1'/></div></Link>
                    <Link to={"/img2"}><div className='img2'><img src={menu2} alt='img-menu2'/></div></Link>
                    </div> 
                    </div>
                <div className='rightmenuwrappers'>
                    <div className='menuwrapper1'>
                        <label>sort by</label>
                        <input type='text' name='Select' placeholder='Select'/>
                        <Link to={"/iconpastle"}> <img src={iconpastle} alt='img-iconpastle1'/></Link>
                    </div>
                    <div className='menuwrapper2'>
                        <input type='text' name='60' placeholder='60'/>
                        <Link to={"/iconpastle2"}><img src={iconpastle} alt='img-iconpastle1'/></Link>
                    </div>
                    <div className='menuwrapper3'>
                    <Link to={"/img1"}><div className='img1'><img src={menu1} alt='img-menu1'/></div></Link>
                    <Link to={"/img2"}><div className='img2'><img src={menu2} alt='img-menu2'/></div></Link>
                    </div>
                </div>
            </div>
            <div className='midlbar2'>

                <div className='midlmenu a'>
                    <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car1} alt='car'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div> 
                </div>
                <div className='midlmenu bc'>
                <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car2} alt='car2'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='midlmenu q'>
                <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car3} alt='car3'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='midlmenu d'>
                    <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car4} alt='car4'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='midlmenu f'>
                    <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car5} alt='car5'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='midlmenu gc'>
                    <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car6} alt='car6'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='midlmenu h'>
                    <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car7} alt='car7'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='midlmenu j'>
                    <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car8} alt='car8'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='midlmenu k'>
                    <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car1} alt='car'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='midlmenu l'>
                    <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car1} alt='car'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='midlmenu z'>
                    <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car1} alt='car'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='midlmenu x'>
                    <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car1} alt='car'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='midlmenu c'>
                    <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car1} alt='car'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='midlmenu v'>
                    <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car1} alt='car'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='midlmenu b'>
                    <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car1} alt='car'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='midlmenu n'>
                    <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car1} alt='car'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='midlmenu m'>
                    <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car1} alt='car'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='midlmenu w'>
                    <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car1} alt='car'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='midlmenu e'>
                    <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car1} alt='car'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='midlmenu r'>
                    <div className='midl-menu-wrapper'>
                    <div className='midl-menu-img'>
                        <img src={car1} alt='car'/>
                    </div>
                    <div className='midl-menu-narxi'>
                        <h4>Name of the car</h4>
                        <div className='Brand-name'>
                            <h5>Brand name</h5>
                        <h5><img src={stark}/>5.3</h5>
                        </div>
                        <h2>250 $</h2>
                        <div className='button-wrapper00'>
                        <Link to={'/button-order'}><div className='Order-button'><button>Order</button></div></Link>
                        <Link to={'/button-Comper'}> <div className='Comper-button'> <button>Compare</button></div></Link>
                        </div>
                        <div className='button-wrapper01'>
                        <Link to={'/button-order1'}><div className='Order-button1'><button>Order</button></div></Link>
                        <Link to={'/button-Comper1'}> <div className='Comper-button1'> <button>VIEW DETAIL</button></div></Link>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </div>
    </div>
     <div className='footer'>
     <div className='footer-menus'>
     <div className='footer-menu-end0'> 
         <Link to={'/Logo'}><div className='Services1'>logo</div></Link>
         </div>
         <div className='footer-menu-end'> 
         <Link to={'/Camper'}><div className='Services1'>Camper</div></Link>
         </div>
         <div className='footer-menu-end'>
         <Link to={'/Services0'}><div className='Services'>Services</div></Link>
            <div className='menus-002'>
            <Link to={'/Camping'}> <h5>Camping</h5></Link>
            <Link to={'/Lodging'}> <h5>Lodging</h5></Link>
            <Link to={'/Harbor'}> <h5>Harbor</h5></Link>
            <Link to={'/Day'}> <h5>Day Use</h5></Link>
            </div>
         </div>
         <div className='footer-menu-end'>
         <Link to={'/Menu'}> <div className='Services'>Menu</div></Link>
            <div className='menus-002'>
            <Link to={'/About'}>   <h5>About</h5></Link>
            <Link to={'/Services1'}>  <h5>Services</h5></Link>
            <Link to={'/Booking'}> <h5>Booking</h5></Link>
            <Link to={'/Blog'}> <h5>Blog</h5></Link>
            </div>
         </div>
         <div className='footer-menu-end'>
         <Link to={'/Contact'}><div className='Services'>Contact</div></Link>
            <div className='menus-002'>
                <div className='icon-img-yIN'>
                <Link to={'/youtube'}><img src={youtube} alt='youtube'/></Link>
                <Link to={'/Instagram'}><img src={Instagram} alt='Instagram'/></Link>
                <Link to={'/Naver'}><img src={Naver} alt='Naver'/></Link>
                </div>
                <Link to={'/Korea'}> <h5>021 Korea Seul, LA</h5></Link>
                <Link to={'/Eexample'}> <h5>camper@example.com</h5></Link>
                <Link to={'/Numbar-tel'}> <h5>(021)345-6789-99</h5></Link>
            </div>
         </div>
         <div className='icon-img-yIN0'>
                <Link to={'/youtube'}><img src={youtube} alt='youtube'/></Link>
                <Link to={'/Instagram'}><img src={Instagram} alt='Instagram'/></Link>
                <Link to={'/Naver'}><img src={Naver} alt='Naver'/></Link>
                </div>
     </div>
 </div>
 </div>
  )
}

export default Midl
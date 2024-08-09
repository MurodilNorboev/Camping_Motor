import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UsedCarComponent from './UsedCar'
import TuningComponent from './Tuning'
import CampingPlaceComponent from './CampingPlase'
import CaravanComponent from './caravan'
import Motorcomponent from './motor'
import NotFaundComponent from './404'
import HomeMotorscomponent from './Home-Motors'
import Motourscomponent from './Motours'
import OurRengescomponent from './Our-ranges'
import CanselbuttonComponent from '../midl/Canselbutton'
import SearchbuttonComponent from '../midl/Searchbutton'
import IconpastleComponent from '../midl/iconpastle'
import Iconpastle2Component from '../midl/iconpastle2'
import Img1component from '../midl/img1'
import Img2Component from '../midl/img2'
import ComperComponent from '../midl/Comper'
import Comper1Component from '../midl/Comper1'
import OrderComponent from '../midl/order'
import Order1Component from '../midl/order1'
import Menuicon1Component from './Menu-icon1'
import Cart1component from './Cart1'
import Menuicon2component from './Menu-icon2'
import Peoplcomponent from './Peopl'
import Kiritishcomponent from './Kiritish'
import Logocomponent from './Logo'
import CamperComponent from './Camper'
import Services0Component from './Services0'
import CampingComponent from './Camping'
import LodgingComponent from './Lodging'
import HarborComponent from './Harbor'
import DayComponent from './Day'
import MenuComponent from './Menu'
import AboutComponent from './About'
import Services1Component from './Services1'
import BookingComponent from './Booking'
import BlogComponent from './Blog'
import ContactComponent from './Contact'
import YoutubeComponent from './youtube'
import InstagramComponent from './Instagram'
import NaverComponent from './Naver'
import KoreaComponent from './Korea'
import EexampleComponent from './Eexample'
import Numbartelcomponent from './Numbar-tel'

const RouterComponent = () => {
  return (
  <Routes>
    <Route path='/motor' element={<Motorcomponent />}/>
    <Route path='/caravan' element={<CaravanComponent />}/>
    <Route path='/CampingPlaceComponent' element={<CampingPlaceComponent />}/>
    <Route path='/Tuning' element={<TuningComponent />}/>
    <Route path='/UsedCar' element={<UsedCarComponent />}/>
    <Route path='/*' element={<NotFaundComponent/>} />
    <Route path='/Home-Motors' element={<HomeMotorscomponent/>}/>
    <Route path='/Our-ranges' element={<OurRengescomponent/>}/>
    <Route path='/Motours' element={<Motourscomponent/>}/>
    <Route path='/Canselbutton' element={<CanselbuttonComponent/>}/>
    <Route path='/Searchbutton' element={<SearchbuttonComponent/>}/>
    <Route path='/iconpastle' element={<IconpastleComponent/>}/>
    <Route path='/iconpastle2' element={<Iconpastle2Component/>}/>
    <Route path='img1' element={<Img1component/>}/>
    <Route path='img2' element={<Img2Component/>}/>
    <Route path='Comper' element={<ComperComponent/>}/>
    <Route path='Comper1' element={<Comper1Component/>}/>
    <Route path='order' element={<OrderComponent/>}/>
    <Route path='order1' element={<Order1Component/>}/>
    <Route path='Menu-icon1' element={<Menuicon1Component/>}/>
    <Route path='Cart1' element={<Cart1component/>}/>
    <Route path='Menu-icon2' element={<Menuicon2component/>}/>
    <Route path='People' element={<Peoplcomponent/>}/>
    <Route path='Kiritish' element={<Kiritishcomponent/>}/>
    <Route path='Logo' element={<Logocomponent/>}/>
    <Route path='Camper' element={<CamperComponent/>}/>
    <Route path='Services0' element={<Services0Component/>}/>
    <Route path='Camping' element={<CampingComponent/>}/>
    <Route path='Lodging' element={<LodgingComponent/>}/>
    <Route path='Harbor' element={<HarborComponent/>}/>
    <Route path='Day' element={<DayComponent/>}/>
    <Route path='Menu' element={<MenuComponent/>}/>
    <Route path='About' element={<AboutComponent/>}/>
    <Route path='Services1' element={<Services1Component/>}/>
    <Route path='Booking' element={<BookingComponent/>}/>
    <Route path='Blog' element={<BlogComponent/>}/>
    <Route path='Contact' element={<ContactComponent/>}/>
    <Route path='youtube' element={<YoutubeComponent/>}/>
    <Route path='Instagram' element={<InstagramComponent/>}/>
    <Route path='Naver' element={< NaverComponent/>}/>
    <Route path='Korea' element={<KoreaComponent/>}/>
    <Route path='Eexample' element={<EexampleComponent/>}/>
    <Route path='Numbar-tel' element={<Numbartelcomponent/>}/>
  </Routes>

  )
}

export default RouterComponent
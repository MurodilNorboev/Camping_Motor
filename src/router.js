
import { Route, Routes, useLocation } from 'react-router-dom'
import Motorcomponent from './components/motor'
import CampingPlaseComponent from './components/camping-Plase/campingPlase'
import NotFileComponent from './components/404'
import Datailmotor from './components/motor/datail'
import CaravanComponent from './components/caravan/caravan'
import UsedCarComponent from './components/used-Car/usedCar'
import AComponent from './components/btuning/atuning'
import DatailCaravan from './components/caravan/datailCaravam'
import DatailTuning from './components/btuning/datailTuning'
import UsedDatail from './components/used-Car/usedDatail'
import DatailCamping from './components/camping-Plase/datailCamping'
import Login from './components/login/login'
import LoginReg from './components/loginReg/LoginReg'
import Navbard from './components/context/navbar'
import Footer from './components/context/footer'
import MainComponent from './components/mainPage/main'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarteComponent from './components/cartFolder/carte'
import VideoCon from './components/videospupop/videoCon'
import Menus_Icon from './components/context/menuicon'
import Tajriba from './components/folder_tajriba/tajriba'
import CaravanCarteComponen from './components/caravanCart/caravancarte'
import TuningCarteComponen from './components/tuningCart/tuningcarte'
import Used_car_CarteComponen from './components/used_car_cart/used_car_carte'
import App from './components/folder_tajriba/tajriba'
import MenuComponent from './components/menu/menus'
import ModelessComponent from './components/modeles/modeless'
import CaravanModelessComponent from './components/caravanmodeles/modalses'
import ModelessComponenttuning from './components/tuningmodeles/tuningmodeleses'
import UsedmidelesComponent from './components/usedmodeles/usedmodeleses'
import Tajribaaa from './components/context/sljsf'
import ScrollToTop from './components/context/scollTotop'
import TajribaComponent from './components/context/sljsf'











const  RouterComponent = () => {

  const location = useLocation();
const LoginContainer = location.pathname === "/login" || location.pathname === "/loginReg" 

  return (<>
  {!LoginContainer && <Navbard/>}

  < ScrollToTop/>
  
  <Routes>
    <Route path='/menu' element={<MenuComponent />} /> 

  <Route path='/tajriba' element={<Tajriba />} /> 

  <Route path='/aa' element={<Tajribaaa />} /> 


    <Route path='*' element={<NotFileComponent />}/> 

    <Route path='/' element={<MainComponent />} />

    <Route path='/carts' element={<CarteComponent />} /> 
    <Route path='/videopupop' element={<VideoCon />} />
    <Route path='/menu_icons' element={<Menus_Icon />} />

    <Route path='/login' element={<Login/>}/>
    <Route path='/loginReg' element={<LoginReg/>}/>

    <Route path='/motor' element={<Motorcomponent/>}/>
    <Route path='/motor/:id' element={<Datailmotor/>}/>
    <Route path='/modeles' element={<ModelessComponent/>}/> 

    <Route path='/caravan' element={<CaravanComponent/>}/>
    <Route path='/caravan/:id' element={<DatailCaravan/>}/>
    <Route path='/caravanCart' element={<CaravanCarteComponen />} />
    <Route path='/caravanmodeles' element={<CaravanModelessComponent />} />

    <Route path='/tuning' element={<AComponent/>}/>
    <Route path='/tuning/:id' element={<DatailTuning />}/>
    <Route path='/tuningCart' element={<TuningCarteComponen />} />
    <Route path='/tuningmodeles' element={<ModelessComponenttuning />} />

    <Route path='/used-Car' element={<UsedCarComponent />}/> 
    <Route path='/used-Car/:id' element={<UsedDatail />}/>
    <Route path='/used_car_cart' element={<Used_car_CarteComponen />} />
    <Route path='/usedmodeles' element={<UsedmidelesComponent />} />

    <Route path='/camping-Plase' element={<CampingPlaseComponent />}/>
    <Route path='/camping-Place/:id' element={<DatailCamping />}/>


  </Routes>
  
  {!LoginContainer && <Footer/>}
  </>
  )
}

export default RouterComponent


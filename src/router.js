
import { Route, Routes } from 'react-router-dom'
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









const  RouterComponent = () => {

  return (<>
  <Routes>
    <Route path='*' element={<NotFileComponent />}/>

    <Route path='/login' element={<Login/>}/>
    <Route path='/loginReg' element={<LoginReg/>}/>

    <Route path='/motor' element={<Motorcomponent/>}/>
    <Route path='/motor/:id' element={<Datailmotor/>}/>

    <Route path='/caravan' element={<CaravanComponent/>}/>
    <Route path='/caravan/:id' element={<DatailCaravan/>}/>

    <Route path='/tuning' element={<AComponent/>}/>
    <Route path='/tuning/:id' element={<DatailTuning />}/>

    <Route path='/used-Car' element={<UsedCarComponent />}/>
    <Route path='/used-Car/:id' element={<UsedDatail />}/>

    <Route path='/camping-Plase' element={<CampingPlaseComponent />}/>
    <Route path='/camping-Place/:id' element={<DatailCamping />}/>


  </Routes>
  </>
  )
}

export default RouterComponent
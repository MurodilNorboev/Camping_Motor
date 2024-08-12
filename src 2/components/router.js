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
  </Routes>

  )
}

export default RouterComponent
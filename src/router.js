import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Motorcomponent from './components/motor'
import CampingPlaseComponent from './components/camping-Plase/campingPlase'
import NotFileComponent from './components/404'
import Datailmotor from './components/motor/datail'
import CaravanComponent from './components/caravan/caravan'
import TuningComponent from './components/tuning/tuning'
import UsedCarComponent from './components/used-Car/usedCar'
import DatailCaravam from './components/caravan/datailCaravam'





const RouterComponent = () => {
  return (
  <Routes>
    <Route path='/motor' element={<Motorcomponent/>}/>
    <Route path='/motor/:id' element={<Datailmotor/>}/>
    <Route path='/caravan' element={<CaravanComponent/>}/>
    <Route path='/caravan/:id' element={<DatailCaravam/>}/>
    <Route path='/tuning' element={<TuningComponent />}/>
    <Route path='/used-Car' element={<UsedCarComponent />}/>
    <Route path='/camping-Plase' element={<CampingPlaseComponent />}/>
    <Route path='*' element={<NotFileComponent />}/>
  </Routes>

  )
}

export default RouterComponent
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Motorcomponent from './components/motor'
import CaravanComponent from './components/caravan'
import TuningComponent from './components/tuning'
import UsedCarComponent from './components/used-Car'
import CampingPlaseComponent from './components/camping-Plase'
import NotFileComponent from './components/404'




const RouterComponent = () => {
  return (
  <Routes>
    <Route path='/motor' element={<Motorcomponent/>}/>
    <Route path='/caravan' element={<CaravanComponent/>}/>
    <Route path='/tuning' element={<TuningComponent />}/>
    <Route path='/used-Car' element={<UsedCarComponent />}/>
    <Route path='/camping-Plase' element={<CampingPlaseComponent />}/>
    <Route path='*' element={<NotFileComponent />}/>
  </Routes>

  )
}

export default RouterComponent
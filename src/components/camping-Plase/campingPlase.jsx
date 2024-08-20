import React from 'react'
import { BacmenuCamPles, CamPlaseCon, CampingCon } from './camplsStyle'
import { Bacfon } from '../motor/bacStyle'
import campingimg1 from '../../assets/CampingImg4.jpg'

const CampingPlaseComponent = () => {
  return (
    <CamPlaseCon>
      < Bacfon className='bac-imgCamping-Plase'>
      <BacmenuCamPles>
          <h5>Home / Motors</h5>
          <h4></h4>
          <h2> Camping Places</h2>
      </BacmenuCamPles>
      </Bacfon>
      <CampingCon>
        <div className="imgCon">
          <img src={campingimg1} alt="camping-img" />
          <h2>Camping Place Name</h2>
          <h4>Location</h4>
        </div>
      </CampingCon>
    </CamPlaseCon>
  )
}

export default CampingPlaseComponent
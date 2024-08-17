import React from 'react'
import { BacmenuCamPles, CamPlaseCon } from './camplsStyle'
import { Bacfon } from '../motor/bacStyle'

const CampingPlaseComponent = () => {
  return (
    <CamPlaseCon>
      < Bacfon className='bac-img'>
      <BacmenuCamPles>
          <h2> Camping Plase Component</h2>
      </BacmenuCamPles>
      </Bacfon>
    </CamPlaseCon>
  )
}

export default CampingPlaseComponent
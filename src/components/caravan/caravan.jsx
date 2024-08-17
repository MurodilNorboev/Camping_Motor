import React from 'react'
import { BacmenuCaravan, CaravanCon } from './caravanstyle'
import { Bacfon, Bacmenu } from '../motor/bacStyle'
import MidlComponent from './midl'

const CaravanComponent = () => {
  return (
     <CaravanCon>
      < Bacfon className='bac-img'>
      <BacmenuCaravan>
      <Bacmenu>
          <h5>Home / Motors</h5>
          <h4>Our ranges</h4>
          <h2>Caravan</h2>
        </Bacmenu>
      </BacmenuCaravan>
      </Bacfon>
      <MidlComponent/>
      </CaravanCon> 
  )
}

export default CaravanComponent


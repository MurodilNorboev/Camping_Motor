import React from 'react'
import { BacmenuUsedCar, UsedCarCon } from './usedStyle'
import { Bacfon } from '../motor/bacStyle'

const UsedCarComponent = () => {
  return (
    <UsedCarCon>
      < Bacfon className='bac-imgUsed-Car'>
      <BacmenuUsedCar>
          <h5>Home / Motors</h5>
          <h4>Our ranges</h4>
          <h2>Used Car</h2>
      </BacmenuUsedCar>
      </Bacfon>
    </UsedCarCon>
  )
}

export default UsedCarComponent
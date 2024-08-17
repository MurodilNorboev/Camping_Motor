import React from 'react'
import { BacmenuUsedCar, UsedCarCon } from './usedStyle'
import { Bacfon } from '../motor/bacStyle'

const UsedCarComponent = () => {
  return (
    <UsedCarCon>
      < Bacfon className='bac-img'>
      <BacmenuUsedCar>
          <h2>Used Car Component</h2>
      </BacmenuUsedCar>
      </Bacfon>
    </UsedCarCon>
  )
}

export default UsedCarComponent
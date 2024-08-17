import React from 'react'
import { BacmenuTuning, TuningCon } from './tuningstyle'
import { Bacfon, Bacmenu } from '../motor/bacStyle'

const TuningComponent = () => {
  return (
        <TuningCon>
       < Bacfon className='bac-img'>
      <BacmenuTuning>
      <Bacmenu>
          <h5>Home / Motors</h5>
          <h4>Our ranges</h4>
          <h2>Tuning</h2>
        </Bacmenu>
      </BacmenuTuning>
      </Bacfon>
    </TuningCon>
  )
}

export default TuningComponent


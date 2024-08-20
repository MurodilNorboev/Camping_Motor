import React from 'react'
import { Bacfon, Bacmenu } from '../motor/bacStyle'
import { BacmenuTuning, TuningCon } from './stuningstyle'

const AComponent = () => {
  return (
    <TuningCon>
         < Bacfon className='bac-imgTuning'>
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

export default AComponent
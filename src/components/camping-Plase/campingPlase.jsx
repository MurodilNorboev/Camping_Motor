import React from 'react'
import { BacmenuCamPles, CamPlaseCon, CampingCon } from './camplsStyle'
import { Bacfon } from '../motor/bacStyle'
import campingimg1 from '../../assets/CampingImg4.jpg'
import { campingimg } from '../mock/campingdata'
import { Link } from 'react-router-dom'

const CampingPlaseComponent = () => {
  const campingdata = campingimg.mainCamping;
  console.log(campingdata);
  return (
    <CamPlaseCon>
      < Bacfon className='bac-imgCamping-Plase'>
      <BacmenuCamPles>
          <h5>Home / Motors</h5>
          <h4></h4>
          <h2> Camping Places</h2>
      </BacmenuCamPles>
      </Bacfon>

      <CampingCon className='CampingCon'>
        {campingdata.map((value, index) => {
          return(
            <div key={index}>
              <Link to={`/camping-Place/${value.id}`}
              style={{textDecoration:'none',color:'black'}}>
                <div className="imgCon">
                  <img src={value.campimg.img} alt="camping-img" />
                  <h2>{value.campimg.campingName}</h2>
                  <h4>{value.campimg.location}</h4>
                </div>
              </Link>
            </div>
          )
        })}
      </CampingCon>

    </CamPlaseCon>
  )
}

export default CampingPlaseComponent

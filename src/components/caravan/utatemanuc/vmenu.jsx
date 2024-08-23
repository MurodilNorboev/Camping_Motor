import React from 'react'
import { caravanCar } from '../../mock/caravandata'
import { ButtonBig, Lengmenus, RightNavbarRow } from './styleHandV';
import { Link } from 'react-router-dom';
import stark from '../../../assets/stark.svg'

const Vmenu = () => {
    const dataCaravan = caravanCar.mainCon;
    console.log(dataCaravan);
  return (
    <RightNavbarRow>
       {dataCaravan.map((value, index) => {
        return(
            <div key={index}>
                <Link to={`/caravan/${value.id}`}
                style={{textDecoration:'none',color:'black'}}>
                <div className='tuzatish'>
                <Lengmenus className='Lengmenus'>
                    <img className='Car0' src={value.car.img} alt="car-img" />
                    <div className='menu-wrap'>
                    <div className='to-wrap'><h3> {value.car.CarName}</h3> <h2>{value.car.Cost}</h2></div>
                    <div className='to-wrap'><h5>{value.car.BrandName}</h5> <img src={stark} alt="stark" /> <p>5.3</p></div>
                    <div className='Button0'>
                      <ButtonBig $second>Order</ButtonBig><ButtonBig $second>Camper</ButtonBig>
                    </div>
                    </div>
                </Lengmenus>
                </div>
                </Link>
            </div>
        )
       })}
    </RightNavbarRow>
  )
}

export default Vmenu
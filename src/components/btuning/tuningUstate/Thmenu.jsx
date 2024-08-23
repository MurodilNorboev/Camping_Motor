import React from 'react'
import { tuningCar } from '../../mock/tuningdata'
import { RightMenu, RightMenuWrapper } from './styleTunHandV';
import { Link } from 'react-router-dom';
import { Button1, CarWrapper } from '../../motor/style00';
import stark from '../../../assets/stark.svg'
import { RihtNavbarCon } from '../stuningstyle';


const Thmenu = () => {
    const datailCon = tuningCar.tuningCon;
    console.log(datailCon);


  return (
    <RightMenuWrapper>

         <RightMenu className='RightMenu'>
            {datailCon.map((value, index) => {
                return(
                    <div key={index}>
                        <Link to={`/tuning/${value.id}`}
                        style={{textDecoration:'none',color:'black'}}>
                            <div className='tuzatish'>
                            <CarWrapper>
                            <div className='bottom'>
                              <img className='Car0' src={value.car.img} alt="car" />
                              <h3> {value.car.CarName} </h3>
                              <div className='h5'>{value.car.BrandName} <h4><img src={stark} alt="stark" />5.3</h4></div>
                              <h2>{value.car.Cost}</h2>
                              <div className='Button0'>
                                <Button1>Order</Button1><Button1 $second>Camper</Button1>
                              </div>
                            </div>
                            </CarWrapper>
                            </div>
                        </Link>
                    </div>
                )
            })}

         </RightMenu>
        
    </RightMenuWrapper>
  )
}

export default Thmenu
import React from 'react'
import { RightMenu } from '../motor-style';
import { Link } from 'react-router-dom';
import { Button1, CarWrapper } from '../style00';
import stark from '../../../assets/stark.svg'
import { campcar } from '../../mock/motor'

const UstatetrumenuComponent = () => {
    const data = campcar.maindata;
    console.log(data)
  return (
    <div>
                  <RightMenu className='RightMenu'>
           {data.map((value, index)=> {
              return(
                <div key={index}>
                  <Link  to={`/motor/${value.id}`}
                  style={{textDecoration: "none", color: "black"}}>
                <CarWrapper>
                <div className='bottom'>
                  <img className='Car0' src={value.car.img} alt="car" />
                <h3> {value.car.CarName} </h3>
                <h5>{value.car.BrandName} <h4><img src={stark} alt="stark" />5.3</h4></h5>
                <h2>{value.car.Cost}</h2>
                <div className='Button0'>
                  <Button1>Order</Button1><Button1 $second>Camper</Button1>
                </div>
                </div>
                </CarWrapper>
                </Link>
                </div>
              )
            })}
            </RightMenu>
    </div>
  )
}

export default UstatetrumenuComponent
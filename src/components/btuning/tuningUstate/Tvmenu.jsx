import React from 'react'
import { ButtonBig, Lengmenus, RightNavbarRow } from './styleTunHandV';
import { Link } from 'react-router-dom';
import { tuningCar } from '../../mock/tuningdata';
import stark from '../../../assets/stark.svg'
import { caravanCar } from '../../mock/caravandata';
import { RihtNavbarCon } from '../stuningstyle';

const Tvmenu = () => {
    const datailtuning = tuningCar.tuningCon;
    console.log(datailtuning);

  return (
    <RightNavbarRow>
       {datailtuning.map((value, index) => {
        return(
            <div key={index}>
                <Link to={`/tuning/${value.id}`}
                style={{textDecoration:'none',color:'black'}}>

                     <div className='tuzatish'>
                      
                     <Lengmenus className='Lengmenus'>
                     <div className='Car0'><img src={value.car.img} alt="car-img" /></div>
                        <div className='menu-wrap'>
                        <div className='to-wrap'><h3> {value.car.CarName}</h3> <h2>{value.car.Cost}</h2></div>
                        <div className='to-wrap'><h5 style={{color:"grey"}}>{value.car.BrandName}</h5><div><img src={stark} alt="stark" /><>5.3</></div></div>
                        <div className='ww'>
                          <button>Order</button><button>Camper</button> </div>
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

export default Tvmenu
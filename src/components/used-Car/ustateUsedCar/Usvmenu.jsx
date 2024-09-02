import React from 'react'
import { usedcarCar } from '../../mock/usedCardata'
import { ButtonBig, Lengmenus, RightNavbarRow } from './UsHvsVstyle';
import { Link } from 'react-router-dom';
import stark from '../../../assets/stark.svg'

const Usvmenu = () => {
    const UsedData = usedcarCar.usedCon;
    console.log(UsedData);
  return (
    <RightNavbarRow>
       {UsedData.map((value, index) => {
        return(
            <div key={index}>
                <Link to={`/used-Car/${value.id}`}
                style={{textDecoration:'none',color:'black'}}>
                     <div className='tuzatish'>
                     <Lengmenus className='Lengmenus'>
                       <div className='Car0'><img src={value.car.img} alt="car-img" /></div>
                        <div className='menu-wrap'>
                        <div className='to-wrap'><h3> {value.car.CarName}</h3> <h2>{value.car.Cost}</h2></div>
                        <div className='to-wrap'><h5>{value.car.BrandName}</h5> <div><img src={stark} alt="stark" /><>5.3</></div></div>
                        <div className='ww'>
                          <button>Order</button><button>Camper</button>
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

export default Usvmenu
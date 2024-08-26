
import { campcar } from '../../mock/motor'
import { Link } from 'react-router-dom';
import stark from '../../../assets/stark.svg'
import { Lengmenus, RightNavbarRow } from '../style00';



const UstateComponent = () => {
    const data = campcar.maindata;
    console.log(data);
  return (
    <RightNavbarRow className=''>
        {data.map((value, index) => {
        return(
            <div key={index}>
                <Link to={`/motor/${value.id}`}
                style={{textDecoration:"none",color:"black"}}>
                  <div className='tuzatish'>

                <Lengmenus className='Lengmenus'>

                  <div className='Car0'><img src={value.car.img} alt="car-img" /></div>
                    
                    <div className='menu-wrap'>
                    <div className='to-wrap1'><h3> {value.car.CarName}</h3> <h2>{value.car.Cost}</h2></div>
                    <div className='to-wrap'><h5  style={{color:"grey"}}>{value.car.BrandName}</h5><div><img src={stark} alt="stark" /><p>5.3</p></div></div>
                    <div className='ww'>
                      <button>Order</button><button>Camper</button></div>
                    </div>
                </Lengmenus>

                </div>
                </Link>
            </div>
        )
    })

        }
    </RightNavbarRow>
  )
}

export default UstateComponent
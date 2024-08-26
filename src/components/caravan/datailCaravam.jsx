import React from 'react'
import { DatailConCaravan } from '../styles/caravanDatailStylE'
import { Bacfon, Bacmenu, CarMenus, DatailMenu, ImgWrapCon } from '../styles/datail'
import { useParams } from 'react-router-dom'
import CarInterior1 from '../../assets/datailimg1.svg';
import CarInterior2 from '../../assets/datailimg2.svg';
import CarInterior3 from '../../assets/datailimg3.svg';
import CarInterior4 from '../../assets/datailimg4.svg';
import CarInterior5 from '../../assets/datailimg5.svg';
import { caravanCar } from '../mock/caravandata';


const DatailCaravan = () => {
  const  {id} = useParams();
  const  datas = caravanCar.mainCon;
  const filtercaravan = datas.filter((value) => value.id === parseInt(id));
  console.log(filtercaravan);
  return (
    <DatailConCaravan>

      <Bacfon className='bac-imgcaravan'>
        <Bacmenu>
          <h2>Aidal</h2>
          <div className='ButWrap'> <button>ADD TO CART</button><button>COMPARE</button></div>
        </Bacmenu>
      </Bacfon>

      <div className="infowrapper">

      <CarMenus>
        {filtercaravan.map((value, index) => {
          return(
            <div key={index}>
             <DatailMenu className='DatailMenu'>
              
            <img className='Car0' src={value.car.img} alt="car1"  />

            <div className='right-info2'>
            <div className='right-info'>
            <div className='info1'><h3>Aidal</h3><h2>{value.car.Cost}</h2></div>
            <h5>Aid</h5>
            <hr className='lang'/>
            <div className='info'><h1>Company</h1><h4>{value.car.company}</h4></div>
            <div className='info'><h1>People</h1><h4>{value.car.place}</h4></div>
            <div className='info'><h1>License type</h1><h4>{value.car.license}</h4></div>
            </div>
            </div>

             </DatailMenu>
            </div>
          )
        })}
     </CarMenus>

     <ImgWrapCon className='ImgWrapCon'>
         <div className='right-info2'>
          <div className='right-info1'>
            <div className='info1'>
            <h2>Comfort</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</p>
           </div>
           </div>
           </div>
     <div className='imgWrap'>
     <img src={CarInterior1} alt="interior-img" />
     </div>
     </ImgWrapCon>

     <ImgWrapCon  className='ImgWrapCon1'>
     <div className='imgWrap'>
      <img src={CarInterior2} alt="interior-img" />
     </div>

     <div className='right-info2'>
     <div className='right-info1'>
     <div className='info1'>
            <h2>Tidying away is child’s play!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</p>
           </div>
           </div>
           </div>
  
     </ImgWrapCon>

     <ImgWrapCon  className='ImgWrapCon'>

     <div className='right-info2'>
     <div className='right-info1'>
     <div className='info1'>
            <h2>Ventilated , Lit up</h2>
            <p>In our vans and motorhomes, all our body lighting is 100% LED: a guarantee of energy efficiency and durability. <br />
            As for ventilation, we also often offer double ventilation in the bathroom (Skylight + window), which is very popular with our customers… <br />
            Camper relies on legendary Seitz windows. They offer the best insulation and are also the easiest to use and safest because they can’t be removed from the outside.												
					</p>
           </div>
           </div>
           </div>
     <div className='imgWrap'>
     <img src={CarInterior3} alt="interior-img" />
     </div>
     </ImgWrapCon>

     <ImgWrapCon  className='ImgWrapCon1'>
     <div className='imgWrap'>
     <img src={CarInterior4} alt="interior-img" />
     </div>

     <div className='right-info2'>
     <div className='right-info1'>
     <div className='info1'>
            <h2>Easy access</h2>
            <p>We add little touches that your joints will thank you for… <br />
                All our motorhomes are equipped with a built-in step to facilitate entry to the vehicle <br />
                All our vans are equipped with an electric step.</p>
           </div>
           </div>
           </div>

     </ImgWrapCon>

     <ImgWrapCon  className='ImgWrapCon'>
     <div className='right-info3'>
     <div className='right-info1'>
     <div className='info1'>
            <h2>Heating when driving</h2>
            <p>Fuel heating is now very popular in the industry, but this was not always the case; Camper (once again) led the way in this area over 15 years ago. <br />
            One of the advantages it offers is that it can heat up your vehicle while you drive, for a more comfortable arrival.</p>
            <div className='ButWrap'> <button>ADD TO CART</button><button>COMPARE</button></div>
           </div>
           </div>
           </div>

     <div className='imgWrap'>
     <img src={CarInterior5} alt="interior-img" />
     </div>
     </ImgWrapCon>
     </div>
    </DatailConCaravan>
  )
}

export default DatailCaravan
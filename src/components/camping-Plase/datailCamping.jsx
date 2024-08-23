import React from 'react'
import { CampCon } from './datailStyle'
import { Link, useParams } from 'react-router-dom'
import { campingimg } from '../mock/campingdata';


const DatailCamping = () => {
    // const { id } = useParams();
    // const data = campcar.maindata;
    // const filterData = data.filter((value) => value.id === parseInt(id));
    // console.log(filterData);
    const {id} = useParams();
    const datacamp = campingimg.mainCamping;
    const filtercamp = datacamp.filter((value) => value.id === parseInt(id))
    console.log(filtercamp);
  return (
    <CampCon>
        {filtercamp.map((value, index) => {
            return(
                <div key={index}>
                    <Link to={`/camping-Place/${value.id}`}
                    style={{textDecoration:'none',color:'black'}}>
                        <div className='flexCon'>
                            <img src={value.campimg.img} alt="camping-img" />
                        </div>
                    </Link>
                </div>
            )
        })}
    </CampCon>
  )
}

export default DatailCamping
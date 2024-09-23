import React from 'react';
import { useParams } from 'react-router-dom';
import './omaterialStile.css'; 
import { caravanCar } from '../mock/caravandata';
import './omaterialStile.css'

interface OmaterialProps {
  onClose: () => void;
}

const Omaterialcaravan: React.FC<OmaterialProps> = ({ onClose }) => {
  const { id } = useParams<{ id: string }>(); 
  const selectedcaravan = caravanCar.find(caravan => caravan.id === Number(id));


  if (!selectedcaravan) {
    return <div>Data not found</div>; 
  }

  return (
    <div className='asosiy_wrapper'
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 99999, 
    }}
  >
    <div
      style={{
        overflow: 'scroll',
        backgroundColor: '#fff',
        padding: '20px',
        width: '100%',
        height: '100%',
        zIndex: 10000, 
        color: '#000',
      }}
    >
      <div className='motor_wrap'> 
        <h2>Motor Details</h2>
      <div className='button_wrap'> 
      <button onClick={onClose}>Close</button>
      </div>
      </div>
      <div className='content-container'>
        <img src={selectedcaravan.img} alt={selectedcaravan.CarName} className="fade-in img_wraps" /> 
     <div className="text fade-in" >
     <p>Name: {selectedcaravan.CarName}</p>
      <p>Brand: {selectedcaravan.BrandName}</p>
      <p>Cost: {selectedcaravan.Cost}</p>
      <p>Year: {selectedcaravan.Dates}</p>
      <p>Location: {selectedcaravan.place}</p>
      <p>Viewed: {selectedcaravan.Viewed}</p>
      <p>Info: {selectedcaravan.info}</p>
      </div>
     </div>
    </div>
    </div>
  );
};

export default Omaterialcaravan;
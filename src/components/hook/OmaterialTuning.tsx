import React from 'react';
import { useParams } from 'react-router-dom';
import './omaterialStile.css'; 
import { tuningCar } from '../mock/tuningdata';
import './omaterialStile.css'; 

interface OmaterialProps {
  onClose: () => void;
}

const Omaterialtuning: React.FC<OmaterialProps> = ({ onClose }) => {
  const { id } = useParams<{ id: string }>(); 
  const selectedtuning = tuningCar.find(tuning => tuning.id === Number(id));


  if (!selectedtuning) {
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
        <img src={selectedtuning.img} alt={selectedtuning.CarName} className="fade-in img_wraps" /> 
     <div className="text fade-in" >
     <p>Name: {selectedtuning.CarName}</p>
      <p>Brand: {selectedtuning.BrandName}</p>
      <p>Cost: {selectedtuning.Cost}</p>
      <p>Year: {selectedtuning.Dates}</p>
      <p>Location: {selectedtuning.place}</p>
      <p>Viewed: {selectedtuning.Viewed}</p>
      <p>Info: {selectedtuning.info}</p>
      </div>
     </div>
    </div>
    </div>
  );
};

export default Omaterialtuning;
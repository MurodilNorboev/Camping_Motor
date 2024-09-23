import React, { useId } from 'react';
import { useParams } from 'react-router-dom';
import './omaterialStile.css'
import { usedcarCar } from '../mock/usedCardata';
import './omaterialStile.css'; 

interface OmaterialProps {
  onClose: () => void;
}

const OmaterialusedCar: React.FC<OmaterialProps> = ({ onClose }) => {
  const { id } = useParams<{ id: string }>();
  const OmaterialusedCar = usedcarCar.find(used => used.id === Number(id));

  if (!OmaterialusedCar) {
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
        <img src={OmaterialusedCar.img} alt={OmaterialusedCar.CarName} className="fade-in img_wraps" /> 
     <div className="text fade-in" >
     <p>Name: {OmaterialusedCar.CarName}</p>
      <p>Brand: {OmaterialusedCar.BrandName}</p>
      <p>Cost: {OmaterialusedCar.Cost}</p>
      <p>Year: {OmaterialusedCar.Dates}</p>
      <p>Location: {OmaterialusedCar.place}</p>
      <p>Viewed: {OmaterialusedCar.Viewed}</p>
      <p>Info: {OmaterialusedCar.info}</p>
      </div>
     </div>
    </div>
    </div>
  );
};

export default OmaterialusedCar;
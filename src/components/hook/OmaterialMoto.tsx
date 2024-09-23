import React from 'react';
import { useParams } from 'react-router-dom';
import { Campcar } from '../mock/mockdatail'; 
import './omaterialStile.css'; 

interface OmaterialProps {
  onClose: () => void;
}

const OmaterialMoto: React.FC<OmaterialProps> = ({ onClose }) => {
  const { id } = useParams<{ id: string }>(); 
  const selectedMotor = Campcar.find(motor => motor.id === Number(id)); 

  if (!selectedMotor) {
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
          <img src={selectedMotor.img} alt={selectedMotor.CarName} className="fade-in img_wraps" /> 
       <div className="text fade-in" >
       <p>Name: {selectedMotor.CarName}</p>
        <p>Brand: {selectedMotor.BrandName}</p>
        <p>Cost: {selectedMotor.Cost}</p>
        <p>Year: {selectedMotor.Dates}</p>
        <p>Location: {selectedMotor.place}</p>
        <p>Viewed: {selectedMotor.Viewed}</p>
        <p>Info: {selectedMotor.info}</p>
        </div>
       </div>
      </div>
    </div>
  );
};

export default OmaterialMoto;




import React, { useState } from 'react';
import styled from 'styled-components';
import cart from '../../assets/cart.svg'
import { campcar } from '../mock/motor';

// Modal Background
const ModalBackground = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  position: fixed;
  z-index: 9;
  padding-top: 98px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.4); */
  justify-content: center;
  align-items: start;
`;
const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px 0px 20px 0px;
  position: relative;
  overflow-y: hidden;
`;
// ochirish tugmasi
const CloseButton = styled.span`
  position: fixed;
  top: 90px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;
// app 
const AppContainer = styled.div`
  text-align: center;
  /* padding-top: 97px; */
`;
// ochilgan holati
const OpenModalButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  &:hover {
    background-color: #0056b3;
  }
`;



const Tajriba = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <AppContainer>
     <img src={cart} alt="" onClick={openModal}/> 
      <Modal show={isModalOpen} handleClose={closeModal} />
    </AppContainer>
  );
};
// Madal 
const Modal = ({ show, handleClose }) => {
  const data = campcar.maindata;
  console.log(data);
  return(
    <ModalBackground show={show}>
    <ModalContent>
      <CloseButton onClick={handleClose}>&times;</CloseButton>
      
      <div style={{display:'flex' }}>
        {data.map((value, index) => {
          return (
            <div key={index}>
              <img src={value.car.img} alt=""  style={{
                width: '225px',
                height: '125px'
              }}/>
              {value.car.CarName}
            </div>
          )
        })}
      </div>
    </ModalContent>
  </ModalBackground>
  )

};
export default Tajriba;







// style={{paddingTop:'97px'}}







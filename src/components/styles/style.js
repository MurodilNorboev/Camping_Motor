import { Link } from "react-router-dom";
import styled from "styled-components";



export const Conainer = styled.div`
  padding: 20px;
  display: flex;
  position: fixed;
  width: 100%;
  background-color: white;
@media only screen and (max-width: 834px) {
  .container {
    display: flex;
  } .MenuWrapper {
    display: none;
  } .Logowrapper {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  } .menu-Icon {
    display: flex;
  }
}
@media only screen and (max-width: 414px) {
  .Conatiner {
    display: flex; 
  } .menu-Icon {
    display: none;
  } .menu-Icon-mobil {
    display: flex;
  } .IconWrapper {
    display: none;
  }
}
`;

export const MenuIcon = styled.div`
display: none;
align-items: center;
justify-content: center;
`;

export const Logowrapper = styled.div`
flex: 0.5;
align-items: center;
justify-content: center;
font-weight:600;
font-size: 38px;
color: #006DAB;
`;

export const MenuWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
flex: 3;
div {
    cursor: pointer;
}
`;
export const IconWrapper = styled.div`
display: flex;
align-items: center;
flex: 0.5;
`;
export const Navbarlang = styled.div`
display: flex;
align-items: center;
`;
export const NavLink = styled(Link)`
text-decoration:none;
`;



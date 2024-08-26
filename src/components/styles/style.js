import { Link } from "react-router-dom";
import styled from "styled-components";



export const Navbar = styled.div`
  z-index: 1;
  padding: 20px;
  display: flex;
  position: fixed;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.20);
  -webkit-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  
@media only screen and (max-width: 834px) {
  .container {
    display: flex;
    justify-content: center;
    padding: 0px 20px 0px 20px;
  } .MenuWrapper {
    display: none;
  } .Logowrapper {
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  } .menu-Icon {
    display: flex;
  }
}
@media only screen and (max-width: 500px){
  .menu-Icon {
    display: none;
  } .menu-Icon-mobil {
    display: flex;
  } .IconWrapper {
    display: none;
  }
}
@media only screen and (max-width: 424px) {
  .Conatiner {
    display: flex; 
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
.login {
  display: flex;
  margin-right: 5px;
}
`;
export const Navbarlang = styled.div`
display: flex;
align-items: center;
`;
export const NavLink = styled(Link)`
text-decoration:none;
`;



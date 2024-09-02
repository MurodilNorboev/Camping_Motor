import { Link } from "react-router-dom";
import styled from "styled-components";


//flex: 0.5;
export const Navbar = styled.div`
  z-index: 3;
  position: absolute;
  padding: 20px;
  display: flex;
  position: fixed;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.20);
  -webkit-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  .Logowrapper {
    display: none;
} .logoerapper2 {
  display: flex;
    flex: 0.5;
    font-size: 50px;
    align-items: center;
    justify-content: center;
    font-weight:600;
    font-size: 38px;
    color: #006DAB;
} .cart_img {
  display: none;
} .Logowrapper3 {
  display: none;
}
  .Logowrapper2 {
    display: flex;
    flex: 0.5;
    font-size: 50px;
    align-items: center;
    justify-content: center;
    font-weight:600;
    font-size: 38px;
    color: #006DAB;
  }
@media only screen and (max-width: 834px) {
  display: flex;
  justify-content: space-between;
  
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
  } .to_wrapt {
    display: flex;
    justify-content: start;
  } .IconWrapper {
    display: flex;
    justify-content: end;
  } .Logowrapper3 {
  display: none;
}
}
@media only screen and (max-width: 500px){
  .menu-Icon {
    display: none;
  } .menu-Icon-mobil {
    display: flex;
  } .IconWrapper {
    display: none;
  } .cart_img {
    display: flex;
  } .Logowrapper3 {
  display: flex;
} .right_menus {
  display: flex;
} .Logowrapper {
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
width: 25px;
height: 25px;
`;

export const Logowrapper = styled.div`

align-items: center;
justify-content: center;
font-weight:600;
font-size: 38px;
color: #006DAB;
.menu-Icon {
  display: none;
} .to_wrapt {
  display: flex;
}
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



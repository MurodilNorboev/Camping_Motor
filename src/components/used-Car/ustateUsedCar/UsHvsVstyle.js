import styled from "styled-components";

// Hmenu ((((((media))))))
export const RightMenuWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media only screen and (max-width: 1005px){
    .RightMenu {
        display: grid;
        grid-template-areas: " a a a ";
    }
}
@media only screen and (max-width: 980px){
     .RightMenu {
        display: grid;
        grid-template-areas: " a a a ";
     }
}
@media only screen and (max-width: 755px){
      .RightMenu {
        display: grid;
        grid-template-areas: " a a ";
    } 
    
} 
@media only screen and (max-width: 640px){
    .RightMenu {
        display: grid;
        grid-template-areas: " a ";
    } .RihtNavbarCon {
        display: grid;
        grid-template-rows: " a a ";
        place-items:unset;
        width: 100%;
        height: 90px;
        padding: 0px;
    } .navbar-menus-4 img{
       display: none;
    } .navbar-menus-7 img {
       display: flex;
   } .NavbarMenul {
        display: flex;
        width: 100%;
        padding-right: 5px;
    }
}

`;
// Menus
export const RightMenu = styled.div`
display: grid;
grid-template-areas: " a a a a ";
align-items: center;
justify-content: center;
gap: 30px 30px;
padding: 20px 0px;
width: 100%;
`;
// Car Menus Wrapper
export const CarConWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 223px;
height: 307px;
padding: 5px 10px;
border-radius: 20px;
box-shadow:
      0 0 0 2px white,
      0em 0em 0.5em rgba(123, 111, 111, 0.6);



.Menus-and {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 130px;
    width: 100%;
} .Brand {
    display: flex;
    width: 100%;
    justify-content: space-between;
} .Menus-and h4 {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
} .Menus-and h5 {
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
} .Menus-and h2 {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    color: #006DAB;
}
.img0 {
    width: 202.42px;
    height: 137.433px;
} .bottom h3 {
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 5px;
} .h5 {
    justify-content: space-between;
    display: flex;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
    padding-bottom: 18px;
} .bottom h4 {
    display: flex;
    align-items: center;
    gap: 3px;
} .bottom h2 {
    color: var(--blue, #006DAB);
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 700;
    padding-bottom: 13px;
} .Button0 {
    display: flex;
    gap: 15px;
} .Button0 :hover {
    background-color: #006DAB;
    color: white;
}
.Car0 {
    width: 202.42px;
    height: 137.433px;
    background-color: white;
}
`;



// Vmanu
export const RightNavbarRow = styled.div`
display: grid;
grid-template-areas: " i ";
align-items: center;
justify-content: center;
padding: 20px 0px;
row-gap: 20px;
.tuzatish {
    display: flex;
    align-items: center;
    justify-content: center;
} 
`;
export const Lengmenus = styled.div`
    width: 955px;
height: 180px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.40);
border-radius: 18px;
margin-top: 20px;
padding: 18px;
display: flex;
.Car0 img{
    width: 280px;
    height: 143px;
    border-radius: 20px;
}
.menu-wrap{
    width: 100%;
    
}
.to-wrap{
    display: flex;
    justify-content: space-between;
    margin-top: 10px; 
    div {
    display: flex;
    align-items: center;
    img {
        width: 15px;
    }
    } 
} 
h5{
    display: flex;
    justify-content: space-between;
}
.ww {
    display: flex;
    /* margin-top: 30px; */
    gap: 14px;
} .to-wrap h2 {
    color: #006DAB;
    font-size: 22px;
} .to-wrap h3 {
    font-size: 18px;
}
.ww button {
  width: 100%;
height: 35px;
font-size: 14px;
border-radius: 10px;
border: 1px solid var(--blue, #006DAB);
background-color: white;
color: #006DAB;
cursor: pointer;
margin-top: 13px;
}
.ww :hover{
    background-color:  #006DAB;
    color: white;
}
@media only screen and (max-width: 960px){
  width: 100%;
}
@media only screen and (max-width: 560px){
    .Car0 img{
        width: 200px;
    }
}
@media only screen and (max-width: 500px){
    .Car0 img{
        width: 150px;
    }
}
@media only screen and (max-width: 440px){
    .Car0 img{
        width: 100px;
    }
}
`;
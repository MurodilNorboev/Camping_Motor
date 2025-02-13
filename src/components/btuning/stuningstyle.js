import styled from "styled-components";



// bac img
export const TuningCon = styled.div`
padding-top: 85.5px;
`;
export const BacmenuTuning = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h5 {
font-family: Montserrat;
font-size: 16px;
font-weight: 500;
color: #FFFFFF;
} h4 {
font-family: Montserrat;
font-size: 27px;
font-weight: 700;
color: #FFFFFF;
} h2 {
font-family: Montserrat;
font-size: 75px;
font-weight: 600;
color: #FFFFFF;
}
`;
// MidlCon VA MEDIA BOR
export const MidlCon = styled.div`
display: flex;
justify-content: center;
gap: 60px;
padding-top: 8px;
.navbar-menus-7 img{
display: none;
} 
@media only screen and (max-width: 1320px){
    .left-Con {
        display: none;
    } .RihtNavbarCon {
        display: flex;
        width: 100%;
        justify-content: center;
        padding: 0px 30px;
    } 
} 
`;
//LefCon
export const LeftCon = styled.div`
display: flex;
flex-direction: column;
align-items: end;

.leftMenu0 {
    width: 240px;
    height: 116px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
} .leftMenu0 h3 {
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 15px 0px;
    border-bottom: 1px solid rgba(55, 55, 55, 0.30);
} .inputwrap {
    display: flex;
    gap: 25px;
} .wrap {
    display: flex;
    flex-direction: column;
} .inputwrap input {
    border-radius: 10px;
    border: 1px solid rgba(55, 55, 55, 0.60);
    width: 91px;
    height: 36px;
}
.leftMenu{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 149px;
} .leftMenu h3 {
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 15px 0px;
    border-bottom: 1px solid rgba(55, 55, 55, 0.30);
    color: #000;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 600;
    line-height: 100%;
} .inputwrap0 {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    gap: 5px;
} .wrap0 {
    display: flex;
    gap: 10px;
} .wrap0 input {
    display: flex;
    width: 22px;
    height: 22px;
    border-radius: 5px;
    border: 1px solid #666;

}
// button
.leftMenu1 {
    padding: 35px 0px 25px 0px;
    width: 239.804px;
    height: 39.968px;
    display: flex;
    justify-content: space-between;
} .butwrap0 {
    height: 39.968px;
} .butwrap :hover {
    background-color: ${(props)=> (props.$second ? "var(--blue, #016097)" : "var(--sariq, #d76800)")};
} .butwrap0 :hover {
    background-color:  var(--blue, #016097);
}
// bottom img
.Comparelang {
    width: 62px;
    height: 19px;
    color: #006DAB;
    margin: 5px 9px;
} .mini-car {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    width: 241px;
}
`;
// RightCon
export const RightCon = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
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
export const RihtNavbarCon = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 36px;
width: 1000px;
margin-top: 51px;
border-bottom: 1px solid #37373780;  
padding-bottom: 15px;
.navbar-menus {
    display: flex;
    align-items: center;
    justify-content: end;
    width:100%;
    gap: 5px;
} .navbar-menus-1 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 10px;
} .navbar-menus-1 h2 {
    display: flex;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 600;
} .navbar-menus-1 h3 {
    display: flex;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 600;
    color: #006DAB;
} .navbar-menus-2 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
} .navbar-menus-2 h3 {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
} .navbar-menus-2 input {
    width: 227px;
    height: 30px;
    border: 1px solid #3737374D;
    border-radius: 5px;
    padding-left: 10px;
} .navbar-menus-3 {
    display: flex;
    border-radius: 5px;
    width: 80px;
    height: 30px;
} .navbar-menus-3 input {
    border: 1px solid #3737374D;
    border-radius: 5px;
    width: 80px;
    height: 30px;
    padding-left: 10px;
} .input-pastle01 img {
    display: flex;
    height: 30px;
    width: 30px;
    border: 1px solid #3737374D;
    border-radius: 0px 5px 5px 0px;
    margin-left: -30px;
} .navbar-menus-4 {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
} .navbar-menus-4 img {
    border: 1px solid #3737374D;
    border-radius: 5px 0px 0px 5px;
    width: 40px;
    height: 30px;
} .navbar-menus-7 img {
    border: 1px solid #3737374D;
    border-radius: 5px 0px 0px 5px;
    width: 40px;
    height: 30px;
} .navbar-menus-5 img {
    width: 40px;
    height: 30px;
    border-radius: 0px 5px 5px 0px;
    margin-left: -1px;
} .navbar-menus-5 {
    display: flex;
    align-items: center;
    justify-content: center;
} .navbar-menus-05 {
    display: flex;
    align-items: center;
    justify-content: center;
} .navbar-menus-6 {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 150px;
} .input-pastle img {
    height: 30px;
    width: 30px;
    border: 1px solid #3737374D;
    border-radius: 0px 5px 5px 0px;
    margin-left: -35px;
    display: flex;
    align-items: center;
    justify-content: center;
} .navbar-menus-7 {
    display: flex;
    align-items: center;
    justify-content: center;
} 
`;
// Navbar Menul
export const NavbarMenul = styled.div` 
display: flex;
height: 36px;
`;


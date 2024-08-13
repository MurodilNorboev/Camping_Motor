import styled from "styled-components";


export const BigContainer = styled.div`
width: 100%;

.footer-mini-con-img-2 {
    display: none;
} .footer-mini-con-0-1 {
    display: none;
}
`;


export const MiniMidlCon = styled.div`
display: flex;
height: 100%;
padding-top: 50px;
 .navbar-menus-7 img{
    display: none;
} 

@media only screen and (max-width: 1230px){
    .MiniMidlCon {
        display: flex;
    } .Leftmenu {
        display: none;
    } .RightNavbar {
        display: flex;
        width: 100%;
        justify-content: center;
        padding: 0px 30px;
    } 
} 

@media only screen and (max-width: 980px){
    .MiniMidlCon {
        display: flex;
    } .RightMenu {
        display: grid;
        grid-template-areas: " a a a ";
    } 
}

@media only screen and (max-width: 847px){
    .MiniMidlCon {
        display: flex;
    } .RightMenu {
        display: grid;
        grid-template-areas: " a a ";
    } 
} 

@media only screen and (max-width: 638px){
    .MiniMidlCon {
        display: flex;
    } .RightNavbar {
        display: grid;
        grid-template-rows: " a a ";
        place-items:unset;
        width: 390px;
        height: 90px;
    } .navbar-menus-7 img {
        display: flex;
        width: 200px;
    } .RightMenu {
        display: grid;
        grid-template-areas: " a ";
    }  .navbar-menus-4 img{
        display: none;
    }  
}

@media only screen and (max-width: 420px) {
    .MiniMidlCon {
        display: flex;
    } .RightNavbar {
        display: flex;
        flex-direction: column;
    } 
}
`;
export const NavbarMenul = styled.div` 
display: flex;
flex: 1;
height: 36px;
`;

export const Leftmenu = styled.div`
flex: 1.2;
width: 250px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 18px;
`;
export const Leftmenus = styled.div`
width: 240px;
height: 155px;
display: flex;
flex-direction: column;
justify-content: flex-start;

.menus-Wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #3737374D;
    margin-bottom: 30px;
    padding: 7px 0px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 600;
    width: 100%;
    color: #000000;
} .input-wrapper-1 {
    display: flex;
} .input-wrapper-2 {
    display: grid;
    grid-template-areas: " a ";
    grid-template-columns: 3cm;
} .input-wrapper-1 input {
    width: 91px;
    height: 36px;
    border-radius: 10px;
    border: 1px solid #37373799;
} .input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;
} .input-wrapper input {
    border: 1px solid #37373799;
} .mini-car {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    width: 241px;
} .Comparelang {
    width: 62px;
    height: 19px;
    color: #006DAB;
    margin: 5px 9px;
}
`;

export const ButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 240px;
height: 155px;
.button-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
} button {
    cursor: pointer;
}
`;
export const Minibutton = styled.button`
padding: ${(props) => (props.$second ? "10px 30px" : "10px 30px")};
background-color: ${(props) => (props.$second ? " #006DAB" : "#FF7A00")};
border-radius: 60px;
border: none;
`;

export const RightMenuWrapper = styled.div`
flex: 3;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const RightNavbar = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 36px;
width: 1000px;
border-bottom: 1px solid #37373780;   


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
    border: 1px solid #3737374D;
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
    margin-left: -34px;
    display: flex;
    align-items: center;
    justify-content: center;
} .navbar-menus-7 {
    display: flex;
    align-items: center;
    justify-content: center;
} 

`;



export const RightMenu = styled.div`
display: grid;
grid-template-areas: " a a a a ";
align-items: center;
justify-content: space-evenly;
gap: 30px 0px;
padding: 20px 0px;
width: 100%;
`;
export const Menus = styled.div`
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
`;

export const ButtonTo = styled.button`
border: 1px solid #006DAB;
color: #006DAB;
border-radius: 10px;
background-color: white;
width: 90px;
height: 35px;
font-family: Montserrat;
font-size: 14px;
font-weight: 700;
cursor: pointer;
.ButtonTo {
    background-color: #006DAB;
}
`;
export const ButtonWrap = styled.div`
 display: flex;
    width: 100%;
    justify-content: space-between;
`;







import styled from "styled-components";


export const BigContainer = styled.div`
width: 100%;
padding-top: 85.5px;
.footer-mini-con-img-2 {
    display: none;
} .footer-mini-con-0-1 {
    display: none;
}
`;

// ((((((((((((media ))))))))))))
export const MiniMidlCon = styled.div`
display: flex;
justify-content: center;
gap: 50px;
padding-top: 50px;
border: 1px solid green;
 .navbar-menus-7 div {
    display: none;
} 

@media only screen and (max-width: 1320px){
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
    } .RightNavbar {
        display: flex;
        gap: 10px;
    }
} 

@media only screen and (max-width: 638px){
    .MiniMidlCon {
        display: flex;
    } .RightNavbar {
        display: grid;
        grid-template-rows: " a a ";
        place-items:unset;
        width: 100%;
        height: 90px;
        padding: 0px;
        margin: 0px;
    } .navbar-menus-7 img {
        display: flex;
        width: 200px;
    } .RightMenu {
        display: grid;
        grid-template-areas: " a ";
    } .navbar-menus-4 div{
        display: none;
    } .navbar-menus-7 div {
        display: flex;
    } 
}

`;
export const NavbarMenul = styled.div` 
display: flex;
height: 36px;
`;
export const Leftmenu = styled.div`

width: 250px;
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 18px;
.leftMenu2{
    display: flex;
    margin-top: -90px;
    flex-direction: column;
    width: 240px;
    height: 149px;
} .Comparelang {
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
    padding: 6.6px 0px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 600;
    width: 100%;
    padding-bottom: 15px;
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
// button
.leftMenu1 {
    width: 100%;
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

`;
// menus wrapper
export const RightMenuWrapper = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
// right navbar
export const RightNavbar = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 36px;
width: 100%;
/* width: 1000px; */
/* max-width: 1000px; */
border-bottom: 1px solid #37373780;   
padding-bottom: 15px;
margin-top: 8px;
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
} .navbar-menus-4 img {
    width: 40px;
    height: 30px;
} .navbar-menus-4 {
    display: flex;
    align-items: center;
    justify-content: center;
} .navbar-menus-9 {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #3737374D;
    width: 40px;
    height: 30px;
    border-radius: 5px 0px 0px 5px;
} .navbar-menus-5 {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #3737374D;
    margin-left: -1px;
    width: 40px;
    height: 30px;
    border-radius: 0px 5px 5px 0px;
} .navbar-menus-9 img {
    width: 20px;
    height: 20px;
} .navbar-menus-5 img {
    width: 20px;
    height: 20px;
} .navbar-menus-6 {
    display: flex;
    align-items: center;
    justify-content: space-around;
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
    padding-right: 5px;
} .navbar-menus-7 img {
    width: 40px;
    height: 30px;
} 
/* @media only screen and (max-width: 420px) {
    .MiniMidlCon {
        display: flex;
    } .RightNavbar {
        display: grid;
        grid-template-rows: " a a ";
        place-items:unset;
        width: 100%;
        height: 90px;
    } 
} */
`;
// right menus(((( ustate))))
export const RightMenu = styled.div`
display: grid;
grid-template-areas: " a a a a ";
align-items: center;
justify-content: center;
gap: 30px 30px;
padding: 20px 0px;
width: 100%;
`;
// ustate
// export const RightNavbarRow = styled.div`
// display: grid;
// grid-template-areas: " i ";
// align-items: center;
// justify-content: center;
// padding: 20px 0px;
// width: 100%;
// row-gap: 20px;
// .tuzatish {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
// } 
// `;
// export const Lengmenus = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     max-width: 1000px;
//     width: 130vmin;
//     min-width: 100px;
//     box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.30);
//     padding: 0px 40px 0px 18px;
//     border-radius: 20px;
    

//     .menu-wrap {
//         display: flex;
//         flex-direction: column;
//         align-items:flex-start;
//         justify-content: center;
//     } .to-wrap {
//         display: flex;
//         width: 100%;
//         justify-content: space-between;
//     } .menu-wrap h3 {
//         color: var(--text, #373737);
//         font-family: Montserrat;
//         font-size: 18px;
//         font-weight: 600;
//         padding-top: 32px;
//     } .menu-wrap h2 {
//         color: var(--blue, #006DAB);
//         font-family: Montserrat;
//         font-size: 22px;
//         font-weight: 700;
//         padding-top: 28px;
//     } .menu-wrap h5 {
//         display: flex;
//         justify-content: space-between;
//         width: 100%;
//         color: var(--text, #373737);
//         font-family: Montserrat;
//         font-size: 12px;
//         font-weight: 400;
//         padding-top: 5px;
//     } .Button0 {
//         display: flex;
//         justify-content: space-between;
//         padding-top: 30px;
//         width: 100%;
//         gap: 14.68px;
//     } .Car0 {
//     width: 280px;
//     height: 143.853px;
//     padding-right: 40px;
// }
// .Button0 :hover{
//     background-color:  #006DAB;
//     color: white;
// }
// @media only screen and (max-width: 850px){
//     .Button0 {
//         display: flex;
//         justify-content: center;
//         width: 100%;
//     }
// }
// `;
// export const ButtonBig = styled.button`
//     width: 40vmin;
//     max-width: 340px;
//     height: 35px;
//     display: flex;
//     background-color: white;
//     justify-content: center;
//     align-items: center;
//     border-radius: 10px;
//     color: #006DAB;
//     border: 1px solid var(--blue, #006DAB);
//     cursor: pointer;
// .ButtonBig :hover {
//     background-color:  #006DAB;
// }
// `;







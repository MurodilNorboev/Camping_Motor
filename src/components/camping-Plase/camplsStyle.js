import styled from "styled-components";


// BacFon
export const CamPlaseCon = styled.div`
padding-top: 85px;
`;
export const BacmenuCamPles = styled.div`
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
// Midl Wrap
export const CampingCon = styled.div`
display: grid;
grid-template-areas: ' a a a a ';
flex-direction: column;
justify-content: center;
@media only  screen and (max-width: 1300px){
    .CampingCon {
        display: grid;
        grid-template-areas: " a ";
    }
}
.imgCon {
    display: flex;
    flex-direction: column;
}
`;
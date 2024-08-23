import styled from "styled-components";


// BacFon
export const CamPlaseCon = styled.div`
padding-top: 85px;

@media only  screen and (max-width: 1250px){
    .CampingCon {
        display: grid;
       grid-template-areas: " a a ";

    }
}
@media only  screen and (max-width: 825px){
    .CampingCon {
        display: grid;
       grid-template-areas: " a ";

    }
}
`;
export const BacmenuCamPles = styled.div`
display: flex;
flex-direction: column;
text-align: center;

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
padding: 80px 0px;
grid-template-areas: " a a a ";
flex-direction: column;
justify-content: center;
gap: 40px 20px;
.imgCon {
    display: flex;
    flex-direction: column;
    max-width: 395px;
    max-height: 367px;
} .imgCon img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    /* height: 100%; */
    /* max-height: 300px; */
    border-radius: 10px;
} .imgCon h2 {
    padding-top: 15px;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 600;
} .imgCon h4 {
    padding-top: 5px;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
}
`;

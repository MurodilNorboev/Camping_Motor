import styled from "styled-components";

// Bac-Img
export const Bacfon = styled.div`
height: 704px;
display: flex;
align-items: center;
justify-content: center;
`;
export const Bacmenu = styled.div`
display: flex;
flex-direction: column;
height: 156px;
width: 292px;
align-items: center;
justify-content: space-between;
 h2 {
font-family: Montserrat;
font-size: 60px;
font-weight: 700;
color: #FFFFFF;
}  button {
    border: 2px solid white;
    width: 181.5px;
    height: 50.014px;
    border-radius: 10px;
    color: white;
    font-weight: 700;
    background: transparent;
} .ButWrap {
    display: flex;
    gap: 13px;
} .ButWrap :hover {
   background-color : var(--blue, #006DAB);
   color: #FFFFFF;
}
`;
// car-Img
export const DatailCon = styled.div`
padding-top: 85px;
display: flex;
flex-direction: column;

@media only  screen and (max-width: 1300px){
    .infowrapper {
        display: grid;
        justify-content: center;
    } .ImgWrapCon {
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-start;
        justify-content: center;
    } .ImgWrapCon1 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    } .lorem {
       display: flex;
       flex-direction: column;
       padding-bottom: 80px;
    } .lorem h2 {
       padding-top: 0px;
    } .ButWrap  button {
        margin-top: 30px;
    } .imgWrap img {
        width: 100%;
        border-radius: 10px;
    } .imgWrap {
        width: auto;
    } .ComfrtWrap {
        display: flex;
    }
}
`;
// car Menu Wrapper ((((((MEDIA))))))
export const CarMenus = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding-bottom: 70px;
.Car0 {
    width: 626px;
    height: 381px;
} .Car0 img {
    width: 100%;
}
@media only  screen and (max-width: 1300px){
    .DatailMenu {
        display: grid;
        grid-template-areas: " a ";
    }
}
`;
export const DatailMenu = styled.div`
display: flex;
margin-top: 5px;
align-items: flex-start;
justify-content: center;
width: 100%;
gap: 20px;
.right-info {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    border-radius: 10px;
    background-color: #FFF;
    width: auto;
    height: 360px;
    padding-top: 30px;
    padding-left: 25px;
    padding-bottom: 163px;
} .info1 h3 {

    color: #000;
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 700;
} .info1 h2 {
    padding-right: 55px;
    color: #006DAB;
    font-family: Montserrat;
    font-size: 30px;
    font-weight: 700;
} .right-info h5 {
    padding-bottom: 10px;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
} .lang {
margin-right: 20px;
} .info h4 {
    padding-top: 10px;
    padding-right: 205px;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
} .info h1 {
    padding-top: 10px;
    padding-right: 226px;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
} .info h6 {
    padding-top: 10px;
    padding-right: 180px;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
} .info1 {
    display: flex;
    justify-content: space-between;
    width: 100%;
} .info {
    display: flex;
    width: 100%;
}
`;
// car-information
export const ImgWrapCon = styled.div`
display: flex;
justify-content: center;

.ComfrtWrap {
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
    width: 683px;
} .lorem {
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    width: 533px;
} .lorem h2 {
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 35px;
    font-weight: 600;
    padding-bottom: 20px;
} .lorem p {
    color: #373737;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
} .imgWrap {
    height: 477px;
}
 .imgWrap img {
    width: 100%;
}  button {
    margin-top: 100px;
    background-color: white;
    border: 1px solid var(--blue, #006DAB);
    width: 181.5px;
    height: 50.014px;
    border-radius: 10px;
    color: var(--blue, #006DAB);
    font-weight: 700;
} .ButWrap {
    display: flex;
    gap: 13px;
} .ButWrap :hover {
   background-color : var(--blue, #006DAB);
   color: #FFFFFF;
}
`; 



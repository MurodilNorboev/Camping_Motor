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
// car-Img // ((((((MEDIA))))))
export const DatailCon = styled.div`
padding-top: 85px;
display: flex;
flex-direction: column;
.infowrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 80px;
}
@media only  screen and (max-width: 1300px){
    .infowrapper {
        width: 100%;
        display: grid;
        justify-content: center;
        align-items: center;
    } .ImgWrapCon {
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-start;
        justify-content: center;
    } .ImgWrapCon1 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    } 
}
`;
// car Menu Wrapper ((((((MEDIA))))))
export const CarMenus = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 70px;
.Car0 {
    width: 94vmin;
    height: 381px;
    max-width: 790px;
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
align-items: center;
justify-content: center;
margin-top: 5px;
width: 100%;
gap: 20px;

.right-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    border-radius: 10px;
    background-color: #FFF;
    width: 93.5vmin;
    max-width: 690px;
    padding-top: 30px;
    padding-left: 25px;
    padding-bottom: 173px;
} .right-info2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
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
    display: flex;
    width: 100%;
    justify-content: flex-start;
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
    width: 100%;
} .info h1 {
    display: flex;
    justify-content: space-between;
    width: 180%;
    padding-top: 10px;
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
align-items: center;
justify-content: center;
max-width: 791px;
width: 100%;

.right-info1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 99.9vmin;
    padding-top: 30px;
    padding-left: 40px;
    padding-right: 40px;
} .right-info2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 230px;
} .right-info3 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 90px;
} .info1 {
    display: flex;
    flex-direction: column;
    width: 100%;
} .info1 h2 {
    padding-bottom: 20px;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 35px;
    font-weight: 600;
} .info1 p {
    color: #373737;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
}
 .imgWrap {
    display: flex;
    align-items: center;
    justify-content: center;
} .imgWrap img { //46.5vw
    width: 100.6vmin;
    max-width: 790px;
    display: flex;
    justify-content: center;
}  button {
    margin-top: 100px;
    background-color: white;
    border: 1px solid var(--blue, #006DAB);
    max-width: 200vw;
    width: 25vmin;
    max-width: 300px;
    height: 50.014px; //    width: 181.5px;
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
@media only  screen and (max-width: 1300px){
    .right-info2 {
    padding-bottom: 60px;
    } .right-info1 {
        padding-bottom: 30px;
        padding-left: 0px;
    } .info1 {
        padding-left: 20px;
        padding-right: 60px;
    } .imgWrap img {
        border-radius: 20px;
        padding: 20px;
    } 

}
`; 



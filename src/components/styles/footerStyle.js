import styled from "styled-components";




export const FooterContainer = styled.div`
width: 100%;
height: 350px;
background-color: #006DAB;
display: flex;
align-items: center;
justify-content: center;


.footer-menus {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 100%;
    height: 220px;
} .footer-mini-con-0 {
    display: flex;
    align-items:flex-start;
    justify-content:flex-start;
    width: 210px;
    color: #FFFFFF;
    font-size: 25px;
    font-weight: 300;
} .footer-mini-con-0-1 {
    display: flex;
    align-items:flex-start;
    justify-content:flex-start;
    width: 210px;
    color: #FFFFFF;
    font-size: 25px;
    font-weight: 300;
} .footer-mini-con {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:space-between;
    width: 210px;
    height: 150px;
} .footer-mini-con h2 {
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
} .footer-mini-con-1 {
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 400;
} .footer-mini-con-img {
    display: flex;
    gap: 2px;
} .footer-mini-con-img-2 {
    display: flex;
    gap: 2px;
} .footer-mini-con-0-1 {
        display:none;
} .footer-mini-con-img-2 {
    display: none;
}

@media only screen and (max-width: 847px) {
    .footer-menus {
        display: flex;
    } .footer-mini-con-0 {
        display: none;
    } .footer-mini-con {
        display: none;
    } .footer-mini-con-img-2 {
    display: flex;
    } .footer-mini-con-0-1 {
        display: flex;
    } 
} 

@media only screen and (max-width: 847px) {
    .footer-menus {
        display: flex;
        align-items: flex-start;
    } .footer-mini-con-img-2 {
        display: flex;
        padding-top: 24opx;
    }
}
@media only screen and (max-width: 847px) {
    .footer-mini-con-img-2 {
        padding-top: 25px;
    }
}
`;
import styled from "styled-components";

export const LoginRegCon = styled.div`
padding-top: 84px;
display: flex;
justify-content: center;
align-items: center;
padding: 100px 0px 64px 0px;
`;
export const LoginWrap = styled.div`
max-width: 500px;
display: flex;
padding: 33px;
flex-direction: column;
align-items: flex-start;
justify-content: center;
width: 68vmin;
max-height: 614px;
border-radius: 20px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.30);

h2 {
    color: var(--text, #373737);
    font-family: "Open Sans";
    font-size: 27px;
    font-weight: 700;
} .loginis1 {
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    padding-top: 25px;
} .loginis1 label {
    color: rgba(55, 55, 55, 0.80);
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 10px;
} .loginis1 input {
    max-width: 434px;
    border: none;
    width: 59.5vmin;
    padding: 17px 20px;
    border-radius: 10px;
    background: rgba(55, 55, 55, 0.10);
} 
.loginis3 {
    padding-top: 15px;
    display: flex;
    width: 100%;
    justify-content: space-between;
} .chackbox1 {
    display: flex;
    gap: 5px;
    align-items: center;
} .intut {
    border: 2px solid green;
    width: 23px;
    height: 22px;
    border-radius: 5px;
    border: none;
    background: rgba(55, 55, 55, 0.15);
} .loginis3 label {
    color: #373737;
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 400;
} .loginis3 h3 {
    color: #373737;
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 400;
} 
.loginis8 {
    padding-top: 25px;
    width: 100%;
} .loginis8 button {
    cursor: pointer;
    max-width: 434px;
    border: none;
    width: 59.5vmin;
    height: 50px;
    border-radius: 10px;
    background: var(--blue, #006DAB);
    color: white;
    font-size: 15px;
    font-weight: 700;
} .loginis8 :hover {
    background: var(--blue, #005DAB);
} 
`;
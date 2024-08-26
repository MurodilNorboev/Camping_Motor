import styled from "styled-components";


export const CampCon = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 20px;
.flexCon {
    max-width: 1285px;
    padding: 0px 20px 0px 20px;
    display: flex;
    flex-direction: column;
} .Location {
    display: flex;
    align-items: center;
    h4 {
        padding: 11px 20px 14px 0px;
    } button {
        width: 120px;
        height: 25px;
        border-radius: 5px;
        border: 1px solid #FF7A00;
        color: #FF7A00;
        font-size: 16px;
        font-weight: 500;
        background-color: white;
    }
} .numWrap {
    display: flex;
    gap: 100px;
} .locationWrap {
    display: flex;
    flex-direction: column;
    h5 {
        padding-top: 18px;
    }
} .info {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    p {
        padding-top: 10px;
    }
} .map-img {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 30px 80px 20px;
    /* width: 1326px; */
    max-width: 1330px;
    /* max-height: 552px; */
} .map-img img {
    width: 100%;
    border: 1px solid black;
}
`;
import styled from "styled-components";

export const ModelesCon = styled.div`
padding-top: 97px;
.leftmenu_wrap_con_2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .leftmenu_wrap_con_2_box {
        max-width: 380px;
        width: 100%;
    }

} .wrap_maping_1 {
    display: flex;
    justify-content: center;
    align-items: center;
} .wrap_maping {
    overflow-x: scroll;
    display: flex;
    justify-content: start;
    gap: 20px;
    padding: 0px 10px;
} .models_wrap_to {
    display: flex;
    flex-direction: column;
    align-items: center;
    h5 {
        margin-bottom: 30px;
    }
} .img_Wrap_model{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 430px;
    max-height: 300px;
    height: 100%;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.40);
    border-radius: 10px;
    margin-bottom: 20px;
    margin-top: 40px;
    img {
        /* border: 1px solid red; */
        max-width: 400px;
        width: 100%;
        max-height: 220px;
        height: 100%;
    }
} .Btn_button {
    padding: 50px 0px 80px 0px;
    display: flex;
    justify-content: center;
    width: 100%;
    button {
        width: 400px;
        padding: 7px;
        border-radius: 8px;
        border: 2px solid #006DAB;
        background-color: transparent;
        color: #006DAB;
    } 
} .Btn_button :hover{
        background-color: #005DAB;
        color: white;
}
.top_Con {
    margin-top: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 56px;
} .pluss {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    button {
        background-color: white;
        border: 1.5px solid black;
        display: flex;
        font-weight: 800;
        font-size: 20px;
        align-items: center;
        border-radius: 50%;
        padding: 0px 9px 2px 9px;
    }
} .plus :hover {
   background-color: rgb(219, 225, 231);
}
`


export const Bacfon = styled.div`
height: 350px;
display: flex;
align-items: center;
justify-content: center;
`;

export const Bacmenu = styled.div`
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
justify-content: space-between;
width: 100%;

h5 {
font-family: Montserrat;
font-size: 16px;
font-weight: 500;
color: #FFFFFF;
} h2 {
font-family: Montserrat;
font-size: 80px;
font-weight: 700;
color: #FFFFFF;
}
`;
import styled from "styled-components";

export const LeftmenusContainer = styled.div`
padding-top: 45px;

.overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    background-color: rgba(0,0,0,0.20);
    position: fixed;
    left: 50px;
}
.modalContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    background: rgba(0, 0, 0, 0.80);
    z-index: 6;
} .soya {
    max-width: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
} ps {
    width: 30px;
    height: 30px;
    font-size: 35px;
    font-weight: 400;
} .Wrap_aut {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.btnContainer {
    display: flex;
    padding: 1rem 1rem;
}
.modalBtn {
    border: 1px solid blue;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
} .modalBtn img {
    background-image: url(../../../assets/car1.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 292px;
    height: 292px;
} .ratioss {
    background-color: aliceblue;
    padding: 0px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 20px;
    width: 850px;
    height: 480px;
} .ratioss iframe {
    width: 790px;
    height: 360px;
    border-radius: 20px;
}

.leftmenu_wrap_con {
    width: 260px;
    border: none;
    box-shadow: none;
} .Accordion {
    /* border: 1px solid red; */
    box-shadow: 0px;
}
.But_wrap {
    width: 100%;
    display: flex;
    justify-content: end;
} .But_wrap button {
    border: 1px solid #006DAB;
    color: #006DAB;
    background-color: transparent;
    padding: 5px 10px;
    border-radius: 10px;
} .But_wrap  :hover {
    background-color: #005DAB;
    color: aliceblue;
} 





.btn_wrap_con {
    display: flex;

} 
.buttones {
    background: var(--sariq, #FF7A00);
    width: 115.804px;
    height: 38.968px;
    border-radius: 60px;
    color: aliceblue;
}
.buttones1 {
    width: 115.804px;
    height: 38.968px;
    border-radius: 60px;
    background: var(--sariq, #006DAB);
    color: aliceblue;
}
`
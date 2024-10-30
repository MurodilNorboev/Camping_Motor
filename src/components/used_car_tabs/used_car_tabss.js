import styled from "styled-components";

// Itom_pages
export const Itm_Wrap = styled.div`
display: flex;
flex-direction: column;
padding: 0px 0px 0px 95px;
.text_wrap {
    display: flex;
    justify-content: space-between;
    padding-right: 70px;
} 
.text_size {
    display: flex;
    align-items: center;
    gap: 10px;
    h5 {
        color: #006DAB;
    }
}
@media only screen and (max-width: 940px) {
    padding: 0px;
    .text_wrap {
        padding-right: 0px;
    }
}
`
export const ItomCon = styled.div`
padding: 0px 116px 0px 0px;
margin-top: 30px;
border-bottom: 1px solid gray;
display: flex;
justify-content: space-between;
align-items: start;

.CarPages_Wrap {
    display: flex;
    gap: 15px;
} .img_wrap_Itom {
    display: flex;
    justify-content: end;
    overflow-y: scroll;
    width: 90px;
    img {
        width: 195px;
        height: 100px;
    }
}
@media only screen and (max-width: 940px) {
    display: flex;
    flex-direction: column;
    padding-right: 0px;
    .CarPages_Wrap {
        display: flex;
        flex-direction: column;
    } .CarPages_Wrap_2 {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
}
`
// Q&A_pages
export const Contagpage = styled.div`
padding-left: 95px;
gap: 69px;
margin-top: 40px;
margin-bottom: 85px;
display: flex;
align-items: end;

.leftquestion {
    max-width: 707px;
    width: 100%;
    margin-top: 25px;
} .question_wrap {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid gray;
    padding-top: 25px;
    padding-left: 20px;
}

// rrightquestion
.rightquestion {
    padding: 0px 30px;
    max-width: 450px;
    width: 100%;
    max-height: 432px;
    height: 100vmin;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.30);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .name_text {
        padding-left: 16px;
        /* max-width: 390px; */
        max-height: 50px;
        height: 390px;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        color: gray;
        background-color:  rgba(0,0,0,0.03);
        border: none;
    }
    .email_text {
        padding-left: 16px;
        /* max-width: 390px; */
        max-height: 50px;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-color:  rgba(0,0,0,0.03);
        border: none;
    }
    .question_text {
        display: flex;
        align-items: flex-start;
        justify-content: start;
        padding-left: 16px;
        /* max-width: 390px; */
        max-height: 120px;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-color:  rgba(0,0,0,0.03);
        border: none;
    }
    .btn_wrap_send {
        display: flex;
        width: 100%;
        button {
            border: none;
            width: 100%;
            height: 50px;
            border-radius: 10px;
            background: var(--blue, #006DAB);
            color: white;
            font-weight: 500;
            font-size: 16px;
        }
    } .btn_wrap_send :hover {
        background: #005DAB;
    }
} 

@media only screen and (max-width: 1100px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
     .rightquestion {
        max-width: 707px;
        width: 100%;
    } 
}
`

// Faqpages 
export const FaqpageCon = styled.div`
margin-top: 40px;
margin-bottom: 85px;
display: flex;
justify-content: center;
align-items: flex-start;
gap: 50px;
// left
.left_text_FASQ {
    display: flex;
    flex-direction: column;
    max-width: 727px;
    width: 100%;
    gap: 20px;
} .FAq_wrap_con {
    border-radius: 10px;
    border: none;
}
// right
.rightquestion {
    padding: 0px 30px;
    max-width: 450px;
    width: 100%;
    max-height: 432px;
    height: 100vmin;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.30);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .name_text {
        padding-left: 16px;
        /* max-width: 390px; */
        max-height: 50px;
        height: 390px;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        color: gray;
        background-color:  rgba(0,0,0,0.03);
        border: none;
    }
    .email_text {
        padding-left: 16px;
        /* max-width: 390px; */
        max-height: 50px;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-color:  rgba(0,0,0,0.03);
        border: none;
    }
    .question_text {
        display: flex;
        align-items: flex-start;
        justify-content: start;
        padding-left: 16px;
        /* max-width: 390px; */
        max-height: 120px;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-color:  rgba(0,0,0,0.03);
        border: none;
    }
    .btn_wrap_send {
        display: flex;
        width: 100%;
        button {
            border: none;
            width: 100%;
            height: 50px;
            border-radius: 10px;
            background: var(--blue, #006DAB);
            color: white;
            font-weight: 500;
            font-size: 16px;
        }
    } .btn_wrap_send :hover {
        background: #005DAB;
    }
} 
@media only screen and (max-width: 1100px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
     .rightquestion {
        max-width: 720px;
        width: 100%;
    } 
}
`

// ContagPages 
export const ContagpageCon = styled.div`
margin-top: 40px;
margin-bottom: 85px;
display: flex;
justify-content: center;
gap: 69px;
.left_map_Con {
    max-width: 707px;
    display: flex;
    flex-direction: column;
    gap: 25px;
} .img_wrap_map {
    display: flex;
    max-width: 707px;
    img {
        width: 100%;
    }
} .num_imeil_wrap {
    display: flex;
    justify-content: space-between;
    gap: 33px;
} .left_num {
    padding-top: 15px;
    padding-bottom: 21px;
    padding-left: 24.44px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
} .right_mail {
    padding-top: 15px;
    gap: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
    gap: 5px;
    padding-left: 35.77px;
    border-radius: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;

}
// right 
.rightquestion {
    padding: 0px 30px;
    max-width: 450px;
    width: 100%;
    max-height: 432px;
    height: 100vmin;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.30);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .name_text {
        padding-left: 16px;
        /* max-width: 390px; */
        max-height: 50px;
        height: 390px;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        color: gray;
        background-color:  rgba(0,0,0,0.03);
        border: none;
    }
    .email_text {
        padding-left: 16px;
        /* max-width: 390px; */
        max-height: 50px;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-color:  rgba(0,0,0,0.03);
        border: none;
    }
    .question_text {
        display: flex;
        align-items: flex-start;
        justify-content: start;
        padding-left: 16px;
        /* max-width: 390px; */
        max-height: 120px;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-color:  rgba(0,0,0,0.03);
        border: none;
    }
    .btn_wrap_send {
        display: flex;
        width: 100%;
        button {
            border: none;
            width: 100%;
            height: 50px;
            border-radius: 10px;
            background: var(--blue, #006DAB);
            color: white;
            font-weight: 500;
            font-size: 16px;
        }
    } .btn_wrap_send :hover {
        background: #005DAB;
    }
} 
@media only screen and (max-width: 1100px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
     .rightquestion {
        max-width: 707px;
        width: 100%;
    } 
}
`
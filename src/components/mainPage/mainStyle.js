import styled from "styled-components";


export const MainCon = styled.div`
display: grid;
grid-template-areas: ' a a ';
justify-content: center;
align-items: center;
height: 900px;
.video_wrap_con {
    
}
`;
// Blogs 
export const BlogsCon = styled.div`
padding: 80px 0px;

.img_wrap_Containers {
    display: grid;
    grid-template-areas: 'a a a ';
    gap: 40px;
    padding: 0px;
    img {
        border-radius: 20px;
        width: 258px;
        height: 258px;
    }
} .img_wra-p {
    display: flex;
    gap: 33px;
    justify-content: center;
} .blogs-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
    h2 {
        padding-bottom: 6px;
        border-bottom: 1px solid #FF7A00;
    }
} .loremWrep {
    
    h3 {
        margin-top: 10px;
        margin-bottom: 35px;
        font-size: 28px;
        font-weight: 600;
    }
    h4 {
        color: #FF7A00;
        margin-bottom: 9.5px;
        font-size: 18px;
        font-weight: 400;
    }
    h5 {
        color: #000;
        font-size: 16px;
        font-weight: 400;
    }
}
@media only screen and (max-width: 1250px){
    .img_wra-p {
    display: grid;
    grid-template-areas: " a ";
    justify-content: center;
    align-items: center;
    } .loremWrep {
        max-width: 880px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        br {
            display: none;
        }
    }
}
@media only screen and (max-width: 900px) {
    .img_wrap_Containers {
        display: grid;
        grid-template-areas: ' a a ';
        justify-content: center;
    } .loremWrep {
        width: 526px;
    }
}
@media only screen and (max-width: 600px) {
    .img_wrap_Containers {
        display: grid;
        grid-template-areas: ' a ';
    } .loremWrep {
        width: 260px;
    }
}
`;





















// export const Pupop_con = styled.div`
// display: grid;
// grid-template-areas: ' a a a a ';
// justify-content: center;
// align-items: center;
// gap: 20px;
// margin-bottom: 80px;
// button {
//     background-image: url(https://www.imgacademy.com/sites/default/files/img-academy-boarding-school-worlds-most-dedicated.jpg);
//     background-position: center;
//     background-size: cover;
//     border: 1px solid rebeccapurple;
//     border-radius: 20px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 292px;
//     height: 292px;
// }
// `;

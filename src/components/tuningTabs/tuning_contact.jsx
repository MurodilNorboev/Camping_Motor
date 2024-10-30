import React from 'react'

import img_map from '../../assets/map_img2.svg'
import { ContagpageCon } from './tuningtabss'


const TuningContact = () => {
  return (
    <ContagpageCon>
        <div className="left_map_Con">
            <div className="img_wrap_map">
                <img src={img_map} alt="" />
            </div>
            <div className="num_imeil_wrap">
                <div className="left_num">
                    <h6>Phone number:</h6>
                    <h5>+7 237 181 181</h5>
                    <h5>+7 210 181 191</h5>
                </div>
                <div className="right_mail">
                    <h6>E-mail:</h6>
                    <h5>logo.uz</h5>
                </div>
            </div>
        </div>
            <div className="rightquestion">
             <h2>Have you got a question</h2>
             <input type="text" className="name_text" placeholder='your name' />
             <input type="text" className="email_text" placeholder='Your email' />
             <input type="text" className="question_text" placeholder='Your question' />
             <div className='btn_wrap_send'><button>Your question</button></div>
        </div>
    </ContagpageCon>
  )
}

export default TuningContact
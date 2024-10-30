import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { Contagpage } from './tabsStyle'
import img_map from '../../assets/map_img2.svg'
import { ContagpageCon } from './tabsStyle';
// import { Contagpage } from './tabsStyle'

const Contagpage = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_98zbnkn', 'template_45x1f2l', form.current, {
          publicKey: 'eW4Jh7S8w-fQtPnRO',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
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
             <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder='your name' className="name_text"/>
      <input type="email" name="user_email" placeholder='Your email' className="emaile_text"/>
      <textarea name="message" placeholder='Your question' className="question_text"/>
      <div className='btn_wrap_send'><input type="submit" value="Your question" className="button"/></div>
    </form>
        </div>
       
    </ContagpageCon>
  )
}

export default Contagpage
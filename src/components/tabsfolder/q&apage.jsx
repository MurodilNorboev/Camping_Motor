
import { Contagpage } from './tabsStyle'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Q_apage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_98zbnkn', 'template_45x1f2l', form.current, {
        publicKey: 'eW4Jh7S8w-fQtPnRO',
      })
      .then(
        () => {
          alert("jonatildi")
          console.log('SUCCESS!');
        },
        (error) => {
          alert('jonarilmadi')
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
     <div>
            <Contagpage>

              <div className="leftquestion">
 <div className="question_wrap">
     <h6>Name</h6>
     <h4>Question Lorem ipsum dolor sit amet ?</h4>
 </div>
 <div className="question_wrap">
     <h6>Name</h6>
     <h4>Question Lorem ipsum dolor sit amet ?</h4>
 </div>
 <div className="question_wrap">
     <h6>Name</h6>
     <h4>Question Lorem ipsum dolor sit amet ?</h4>
 </div>
 <div className="question_wrap">
     <h6>Name</h6>
     <h4>Question Lorem ipsum dolor sit amet ?</h4>
 </div>
 <div className="question_wrap">
     <h6>Name</h6>
     <h4>Question Lorem ipsum dolor sit amet ?</h4>
 </div>
              </div>

    <div className="rightquestion">

      <h2>Send a question</h2>

    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder='your name' className="name_text"/>
      <input type="email" name="user_email" placeholder='Your email' className="emaile_text"/>
      <textarea name="message" placeholder='Your question' className="question_text"/>
      <div className='btn_wrap_send'><input type="submit" value="Your question" className="button"/></div>
    </form>
    </div> 
              
            </Contagpage>
     </div>
  )
}

export default Q_apage
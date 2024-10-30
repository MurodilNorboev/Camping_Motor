import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
// import { Contagpage } from './tabsStyle'

// import './pupopStyle.css'
import { Box } from '@mui/material';
import { FaqpageCon } from './tabsStyle';

export default function Faqpage() {
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
    <FaqpageCon>
      <div className='left_text_FASQ'>

      <Accordion className='FAq_wrap_con'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          >
         <h5>Frequently asked questions </h5>
        </AccordionSummary>
        <AccordionDetails>
            <h5>Frequently asked questions </h5>
        </AccordionDetails>
      </Accordion>

      <Accordion className='FAq_wrap_con'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h5>Frequently asked questions </h5>
        </AccordionSummary>
        <AccordionDetails>
        <h5>Frequently asked questions </h5>
        </AccordionDetails>
      </Accordion>

      <Accordion className='FAq_wrap_con'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <h5>Frequently asked questions </h5>
        </AccordionSummary>
        <AccordionDetails>
        <h5>Frequently asked questions </h5>
        </AccordionDetails>
      </Accordion>

      <Accordion className='FAq_wrap_con'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         <h5>Frequently asked questions </h5>
        </AccordionSummary>
        <AccordionDetails>
        <h5>Frequently asked questions </h5>
        </AccordionDetails>
      </Accordion>

      <Accordion className='FAq_wrap_con'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <h5>Frequently asked questions </h5>
        </AccordionSummary>
        <AccordionDetails>
        <h5>Frequently asked questions </h5>
        </AccordionDetails>
      </Accordion>

      <Accordion className='FAq_wrap_con'>
        <AccordionSummary className='Location'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <h5>Frequently asked questions </h5>
        </AccordionSummary>
        <AccordionDetails>
        <h5>Frequently asked questions </h5>
        </AccordionDetails>
        <AccordionActions className='btn_wrap_con'>
          <Button className='buttones'>Cancel</Button>
          <Button className='buttones1'>search</Button>
        </AccordionActions>
      </Accordion>
      
      </div>
      <div>
      <div className="rightquestion">
         <h2>Have you got a question</h2>
         <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder='your name' className="name_text"/>

      <input type="email" name="user_email" placeholder='Your email' className="emaile_text"/>

      <textarea name="message" placeholder='Your question' className="question_text"/>
      
      <div className='btn_wrap_send'><input type="submit" value="Your question" className="button"/></div>
    </form>
       </div>
        </div>

    </FaqpageCon>
  );
}










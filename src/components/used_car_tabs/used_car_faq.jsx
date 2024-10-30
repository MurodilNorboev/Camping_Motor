import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
// import './pupopStyle.css'
import { Box } from '@mui/material';
import { FaqpageCon } from './used_car_tabss';


export default function UsedFaq() {
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

      <div className="rightquestion">
         <h2>Have you got a question</h2>
         <input type="text" className="name_text" placeholder='your name' />
         <input type="text" className="email_text" placeholder='Your email' />
         <input type="text" className="question_text" placeholder='Your question' />
       <div className='btn_wrap_send'><button>Send question</button></div>
       </div> 

    </FaqpageCon>
  );
}
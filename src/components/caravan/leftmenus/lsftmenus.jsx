import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
// import './pupopStyle.css'
import { Leftmenus } from '../../motor/motor-style';
import miniImg1 from '../../../assets/moto1.svg' //moto1.svg
import miniImg2 from '../../../assets/moto2.svg'
import miniImg3 from '../../../assets/moto3.svg'
import { LeftmenusContainer } from './leftmenusstyle';
import CaravanModelessComponent from '../../caravanmodeles/modalses';
import { Link } from 'react-router-dom';

export default function AccordionUsagecaravan() {
  return (
    <LeftmenusContainer className='leftmenu_wrap_con'>

      <Accordion defaultExpanded className='Accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          >
          Cost of car
        </AccordionSummary>

        <AccordionDetails>
        <Leftmenus>
            <div className='input-wrapper-1'>
            <div className='input-wrapper-2'> <label>from</label> <input/> </div>
            <div className='input-wrapper-2'> <label>to</label> <input/> </div>
            </div>
          </Leftmenus>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded className='Accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Brand
        </AccordionSummary>
        <AccordionDetails>
        <Leftmenus>
            <div className='input-wrapper'>
            <div><input type='checkbox'/><label> Aidal</label></div>
            <div><input type='checkbox'/> <label>Knal</label></div>
            <div><input type='checkbox'/> <label>escape</label></div>
            </div>
          </Leftmenus>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded className='Accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Company
        </AccordionSummary>
        <AccordionDetails>
        <Leftmenus>
            <div className='input-wrapper'>
            <div> <input type='checkbox'/> <label>escape</label></div>
            <div><input type='checkbox'/> <label>Aidal</label></div>
            </div>
          </Leftmenus>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded className='Accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          License type
        </AccordionSummary>
        <AccordionDetails>
        <Leftmenus>
            <div className='input-wrapper'>
            <div> <input type='checkbox'/> <label>1 year</label></div>
            <div><input type='checkbox'/> <label>2 year</label></div>
            <div> <input type='checkbox'/> <label>1.5 year</label></div>
            </div>
          </Leftmenus>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded className='Accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Number of travelers
        </AccordionSummary>
        <AccordionDetails>
        <Leftmenus>
            <div className='input-wrapper'>
            <div>  <input type='checkbox'/> <label>2</label></div>
            <div>  <input type='checkbox'/> <label>3-4</label></div>
            <div>  <input type='checkbox'/> <label>5++</label></div>
            </div>
          </Leftmenus>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded className='Accordion'>
        <AccordionSummary className='Location'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Location
        </AccordionSummary>
        <AccordionDetails>
        <Leftmenus>
            <div className='input-wrapper'>
            <div> <input type='checkbox'/> <label>Seul</label></div>
            <div><input type='checkbox'/> <label>Korea</label></div>
            <div> <input type='checkbox'/> <label>Pusan</label></div>
            </div>
          </Leftmenus>
        </AccordionDetails>
        <AccordionActions className='btn_wrap_con'>
          <Button className='buttones'>Cancel</Button>
          <Button className='buttones1'>search</Button>
        </AccordionActions>
      </Accordion>

      <Accordion defaultExpanded className='Accordion'>
       <div>compare</div>
        <AccordionDetails>
       
        <div className='mini-car'>
              <img src={miniImg1} alt='mini-img-car1' style={{width:"75px"}}/>
              <img src={miniImg2} alt='mini-img-car2' style={{width:"75px"}}/>
              <img src={miniImg3} alt='mini-img-car3' style={{width:"75px"}}/>
            </div>
       
        </AccordionDetails>
      </Accordion>

      <div className='But_wrap'><Link to={'/caravanmodeles'} style={{height:'0px'}}><button className='BTN_Wrap'>compare</button></Link></div>
      
    </LeftmenusContainer>
  );
}
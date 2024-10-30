
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Bacfon, Bacmenu, ModelesCon } from '../modeles/modelesStyle';
import { tuningCar } from '../mock/tuningdata';

const ModelessComponenttuning = () => {
    const datamodels = tuningCar.tuningCon
    const slice = datamodels.slice(0,3)
    console.log(slice)
  return (
    <ModelesCon>
            <Bacfon className='bac-img'>
                 <Bacmenu>
                   <h5>Home / Motors / Compare</h5>
                   <h2>Compare our models</h2>
                 </Bacmenu>
            </Bacfon>
            <div className='top_Con'><h3>Compare Models</h3><div className='pluss'><div className='plus'><button>+</button></div><h5>Add models</h5></div></div>
            
            <div className='wrap_maping_1'>
                
            <div className='wrap_maping'>
            {slice.map((value, index) => {
                return(
                    <div key={index} className='models_wrap'>
                       <div className='models_wrap_to'>
                       <div className='img_Wrap_model'><img src={value.car.img} alt="" /></div>
                       <h5>{value.car.CarName}</h5>
                       </div>

               <div className='leftmenu_wrap_con_2'>
                 <Accordion  className='leftmenu_wrap_con_2_box'>
        <AccordionSummary
          expandIcon={<ArrowRightIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          models
        </AccordionDetails>
                 </Accordion>

                 <Accordion  className='leftmenu_wrap_con_2_box'>
        <AccordionSummary
          expandIcon={<ArrowRightIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
        models
        </AccordionDetails>
                 </Accordion>

                 <Accordion  className='leftmenu_wrap_con_2_box'>
        <AccordionSummary
          expandIcon={<ArrowRightIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
        models
        </AccordionDetails>
                 </Accordion>

                 <Accordion  className='leftmenu_wrap_con_2_box'>
        <AccordionSummary
          expandIcon={<ArrowRightIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
        models
        </AccordionDetails>
                 </Accordion>

                 <Accordion  className='leftmenu_wrap_con_2_box'>
        <AccordionSummary
          expandIcon={<ArrowRightIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
        models
        </AccordionDetails>
                 </Accordion>

                 <Accordion  className='leftmenu_wrap_con_2_box'>
        <AccordionSummary
          expandIcon={<ArrowRightIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
        models
        </AccordionDetails>
                 </Accordion>

                 <div className='Btn_button'><button>Order</button></div>
                 </div>


                     </div>
                )
            })}
            </div>
            </div>
    </ModelesCon>
  )
}

export default ModelessComponenttuning
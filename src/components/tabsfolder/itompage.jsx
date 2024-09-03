import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Q_apage from './q&apage';
import Faqpage from './faqpage';
import Contagpage from './contagpage';
import { useParams } from 'react-router-dom';
import { campcar } from '../mock/motor';
import { Itm_Wrap, ItomCon } from './tabsStyle';

export default function LabTabs() {
    const datailtabs = campcar.maindata;
    console.log(datailtabs)

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
            <Tab label="Item four" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <Itm_Wrap>
                 <div className='text_wrap'>
                   <div className='text_size'
                     ><h4>Premium Review</h4><h5>35</h5></div>
                  <div><input type="text" placeholder='Best' /><img src="" alt="" /></div>
                 </div>

                 {datailtabs.map((value, index) => {
                    return(
                        <div key={index}>
                            <ItomCon>
                                  <div className='CarPages_Wrap'>
                                    <div className='img_wrap_Itom'><img src={value.car.img} alt="" /></div>
                                    <div><h6>{value.car.CarName}</h6>
                                    <h6>{value.car.BrandName}</h6>
                                    <h6 className='lorem_Con'>{value.car.info}</h6>
                                    </div>
                                    
                                  </div>
                                  <div className='CarPages_Wrap_2'>
                                    <h6>Id:{value.car.ID}</h6>
                                    <h6>Date:{value.car.Dates}</h6>
                                    <h6>Viewed:{value.car.Viewed}</h6>
                                  </div>
                             </ItomCon>
                        </div>
                    )
                 })}
            </Itm_Wrap>
            </TabPanel>
        <TabPanel value="2"><Q_apage /></TabPanel>
        <TabPanel value="3"><Faqpage /></TabPanel>
        <TabPanel value="4"><Contagpage /></TabPanel>
      </TabContext>
    </Box>
  );
}


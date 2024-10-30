
import React, { useState } from 'react';
import { Drawer, List, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccordionUsage from '../mainPage/pupob/pupopCon';

function Menus_Icon() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('dm')); // 'md' o‘lchamni to‘g‘rilash

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div style={{'@media (max-width: 1200px)': {
    display:"flex",
  },}}>
                <MenuIcon onClick={handleDrawerToggle} style={{
                  
                  marginRight:"10px",
                    fontSize:"30px",
                    color:"black",
                    margin:"none",
                }}/>
      <Drawer
        variant={isDesktop ? "persistent" : "temporary"}
        anchor={isMobile ? "right" : "left"}
        open={isDesktop ? true : open}
        onClose={!isDesktop ? handleDrawerToggle : undefined}
        sx={{
          
    
          '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
          },
        }}
      >
        <List style={{padding:'0px 10px'}}>
        <AccordionUsage/>
        </List>
      </Drawer>

      {/* <main>
        <Toolbar />
        
      </main> */}

    </div>
  );
}

export default Menus_Icon;
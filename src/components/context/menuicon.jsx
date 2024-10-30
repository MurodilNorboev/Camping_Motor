import React, { useState } from 'react';
import { Drawer, Typography, List, ListItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import peopl from '../../assets/peopl.svg'
import cart from '../../assets/cart.svg'

function Menus_Icon() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('dm')); // 'md' o‘lchamni to‘g‘rilash

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
                <MenuIcon onClick={handleDrawerToggle} style={{
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
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>
          <ListItem button>
            <Typography><NavLink to={"/motor"} style={{textDecoration:'none',color:'black'}}> <div>Motor</div></NavLink></Typography>
          </ListItem>
          <ListItem button>
            <Typography><NavLink to={"/caravan"} style={{textDecoration:'none',color:'black'}}> <div>Caravan</div>   </NavLink></Typography>
          </ListItem>
          <ListItem button>
            <Typography><NavLink to={"/tuning"} style={{textDecoration:'none',color:'black'}}> <div>Tuning</div>  </NavLink></Typography>
          </ListItem>
          <ListItem button>
            <Typography><NavLink to={"/used-Car"} style={{textDecoration:'none',color:'black'}}>   <div>Used Car</div> </NavLink></Typography>
          </ListItem>
          <ListItem button>
            <Typography> <NavLink to={"/camping-Plase"} style={{textDecoration:'none',color:'black'}}>   <div>Camping place</div>  </NavLink></Typography>
          </ListItem>
          <ListItem button>
            <Typography> <img  src={cart}  alt='cart'/></Typography>
          </ListItem>
          <ListItem button>
            <Typography><NavLink to={'/login'}  style={{textDecoration:'none',color:'black'}}>
            <div className='login'><img  src={peopl} alt='peopl' /></div>
            </NavLink></Typography>
          </ListItem>
        </List>
      </Drawer>

      {/* <main>
        <Toolbar />
        
      </main> */}

    </div>
  );
}

export default Menus_Icon;



import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import dropdown from '../../assets/pastle.svg'

export default function MenuComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      <img src={dropdown} 
        onClick={handleClick}
      />
       
      
      <Menu 
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
       >
        <MenuItem onClick={handleClose}>My orders</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Log out</MenuItem>
      </Menu>
    </div>
  );
}
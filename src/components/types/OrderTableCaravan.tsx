
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import IconButton, { iconButtonClasses } from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Campcar } from '../mock/mockdatail';
import { caravanCar } from '../mock/caravandata';

const data = caravanCar.mainCon;
console.log(data);

export default function OrderTableCaravan() {
  return (
    <React.Fragment>

      <Sheet  variant="outlined"
        sx={{ width: "100%", boxShadow: "dm", borderRadius: "sm" }}>
     
        <Table 
          aria-labelledby="tableTitle"
          stickyHeader
          hoverRow
          sx={{
            '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
            '--Table-headerUnderlineThickness': '1px',
            '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
            '--TableCell-paddingY': '4px',
            '--TableCell-paddingX': '20px',
            '--width': '100%',
          }}
        >
          <thead>
            <tr>
              <th style={{ width: 0, textAlign: 'start', padding: '0px',border:"0px" }}>
              </th>
              <th >Car Name</th>
              <th >Year</th>
              <th >Location</th>
              <th >Brand</th>
              <th >People</th>
              <th >Rate</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => {
              return(
                <tr key={index}>
                 
                   <td style={{ textAlign: 'start' }}> </td>
                   <td>
                      <Typography level="body-xs">{value.car.CarName}</Typography>
                   </td>
                   <td>
                     <Typography level="body-xs">{value.car.Dates}</Typography>
                   </td>
                   <td>
                     <Typography level="body-xs">{value.car.company}</Typography>
                   </td>
                   <td>
                     <Typography level="body-xs">{value.car.BrandName}</Typography>
                   </td>
                   <td>
                     <Typography level="body-xs">{value.car.place}</Typography>
                   </td>
                   <td>
                     <Typography level="body-xs">{value.car.Viewed}</Typography> 
                   </td>
                  
                </tr>
              )
            })}
          </tbody>
        </Table>

      </Sheet>
      
      <Box
        className="Pagination-laptopUp"
        sx={{
          pt: 2,
          gap: 1,
          [`& .${iconButtonClasses.root}`]: { borderRadius: '50%' },
          display: {
            xs: 'none',
            md: 'flex',
          },
        }}
      >
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          startDecorator={<KeyboardArrowLeftIcon />}
        >
          Previous
        </Button>

        <Box sx={{ flex: 1 }} />
        {['1', '2', '3', '…', '8', '9', '10'].map((page) => (
          <IconButton
            key={page}
            size="sm"
            variant={Number(page) ? 'outlined' : 'plain'}
            color="neutral"
          >
            {page}
          </IconButton>
        ))}
        <Box sx={{ flex: 1 }} />
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          endDecorator={<KeyboardArrowRightIcon />}
        >
          Next
        </Button>
      </Box>
    </React.Fragment>
  );
}
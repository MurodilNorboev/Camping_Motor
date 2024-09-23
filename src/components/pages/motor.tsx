import * as React from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import { useEffect, useState } from 'react';
import { TayblePropse, TayblePropses } from '../types/data'; 
import { Box, Typography } from '@mui/joy';
import { useNavigate } from 'react-router-dom'; 
import BasicModalDialog from '../download/downPDFmotor';
import { Campcar } from '../mock/mockdatail';

const MotorComponent = () => {
  const [data, setData] = useState<TayblePropses[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setData(Campcar as TayblePropses[]); 
  }, []);

  const handleRowClick = (motorId: number) => {
    navigate(`/omaterial/${motorId}`); 
  };

  return (
    <div>
      <Box
        sx={{
          padding: '0px 0px 50px 0px',
          display: 'flex',
          mb: 1,
          gap: 1,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'start', sm: 'center' },
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Typography level="h2" component="h1">
          Motor
        </Typography>
        <div>
          <BasicModalDialog />
        </div>
      </Box>

      <React.Fragment>
        <div>
          <Sheet
            variant="outlined"
            sx={{ width: "100%", boxShadow: "dm", borderRadius: "sm", overflow: 'scroll', height: '680px' }}
          >
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
                  <th style={{ width: 0, textAlign: 'start', padding: '0px', border: "0px" }}></th>
                  <th>Car Name</th>
                  <th>Year</th>
                  <th>Location</th>
                  <th>Brand</th>
                  <th>People</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((value, index) => (
                  <tr key={index} onClick={() => handleRowClick(value.id)}>
                    <tr></tr>
                    <td>{value.CarName}</td>
                    <td>{value.Dates}</td>
                    <td>{value.company}</td>
                    <td>{value.BrandName}</td>
                    <td>{value.place}</td>
                    <td>{value.Viewed}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Sheet>
        </div>
      </React.Fragment>
    </div>
  );
};

export default MotorComponent;



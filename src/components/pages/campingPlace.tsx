import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Campcars } from '../types/data';
import { Campingimg } from '../mock/campingdata';
import { Box, Typography } from '@mui/joy';
import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import BasicModalDialogcamping from '../download/downPDFcamping';

const CampingPlaceComponent = () => {
  const [data, setData] = useState<Campcars[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setData(Campingimg); 
  }, []);

  const handleRowClick = (campingId: number) => {
    navigate(`/omaterial/camping/${campingId}`); 
  };

  return (
    <div>
      <Box sx={{ padding: '0px 0px 50px 0px', display: 'flex', mb: 1, gap: 1, justifyContent: 'space-between' }}>
        <Typography level="h2" component="h1">Camping Car</Typography>
        <div>
          <BasicModalDialogcamping />
        </div>
      </Box>
      
      <Sheet variant="outlined" sx={{ width: '100%', boxShadow: 'sm', borderRadius: 'sm', overflow: 'scroll', height: '680px' }}>
        <Table
          aria-labelledby="tableTitle"
          hoverRow
          sx={{ '--TableCell-paddingY': '4px', '--TableCell-paddingX': '20px', '--width': '100%' }}
        >
          <thead>
            <tr>
              <th>Camping Name</th>
              <th>Location</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((value, index) => (
              <tr key={index} onClick={() => handleRowClick(value.id)}>
              <td>{value.campingName}</td>
              <td>{value.location}</td>
              <td>{value.number}</td>
              </tr>
             ))}
          </tbody>
        </Table>
      </Sheet>
    </div>
  );
};

export default CampingPlaceComponent;


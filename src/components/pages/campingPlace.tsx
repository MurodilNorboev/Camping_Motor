
import OrderTableCampingPlace from '../types/OrderTableCampingPlace'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { Box, Button, Typography } from '@mui/joy'

const CampingPlaceComponent = () => {
  return (
    <div>
          <Box
            sx={{
              padding:'0px 0px 50px 0px',
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
             Camping Place
            </Typography>
            

           <Button
              color="primary"
              startDecorator={<DownloadRoundedIcon />}
              size="sm"
            >
              Download PDF
            </Button>

          </Box>
      <OrderTableCampingPlace />
    </div>
  )
}

export default CampingPlaceComponent

import OrderTableTuning from '../types/OrderTableTuning'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { Box, Button, Typography } from '@mui/joy'

const TuningComponent = () => {
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
              Tuning
            </Typography>
            

           <Button
              color="primary"
              startDecorator={<DownloadRoundedIcon />}
              size="sm"
            >
              Download PDF
            </Button>

          </Box>
      <OrderTableTuning />
    </div>
  )
}

export default TuningComponent

import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Sidebar from './components/types/Sidebar';
import Header from './components/types/Header';
import { Route, Routes } from 'react-router-dom';
import MotorComponent from './components/pages/motor';
import CarouselComponent from './components/pages/carousel';
import CaravanComponent from './components/pages/caravan';
import TuningComponent from './components/pages/tuning';
import UsedCarComponent from './components/pages/usedCar';
import CampingPlaceComponent from './components/pages/campingPlace';
import UserListComponent from './components/pages/userList';
import MassageComponent from './components/pages/massage';

export default function JoyOrderDashboardTemplate() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Header />
        <Sidebar />
        <Box
          component="main"
          className="MainContent"
          sx={{
            px: { xs: 2, md: 6 },
            pt: {
              xs: 'calc(12px + var(--Header-height))',
              sm: 'calc(12px + var(--Header-height))',
              md: 3,
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          </Box>
          <Routes>
            <Route path='/motor' element={<MotorComponent />} />
            <Route path='/caravan' element={<CaravanComponent />} />
            <Route path='/tuning' element={<TuningComponent />} />
            <Route path='/usedCar' element={<UsedCarComponent />} />
            <Route path='/campingPlace' element={<CampingPlaceComponent />} />
            <Route path='/userList' element={<UserListComponent />} />
            <Route path='/carousel' element={<CarouselComponent />} />
            <Route path='/message' element={<MassageComponent />} />
          </Routes>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}

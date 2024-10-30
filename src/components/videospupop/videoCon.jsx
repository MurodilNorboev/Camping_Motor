
import down from '../../assets/video.png'
import React, { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { Video_ConTainer } from './videos';



const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const modals = [
    { id: 1, title: "Video 1 Title", videoSrc: "https://www.youtube.com/embed/ayEvqETlBs8", imageSrc: "https://media.istockphoto.com/id/1362129184/photo/camper-driving-down-road-in-the-beautiful-countryside-among-pine-trees-and-flowers.jpg?s=612x612&w=0&k=20&c=1Y4vvSk-M7N0yGyq_M0OxTc5fjnc7tvOZLOEhlXMn2c="},
    { id: 2, title: "Video 2 Title", videoSrc: "https://www.youtube.com/embed/RQL0Ld7E6DA", imageSrc: "https://www.shutterstock.com/image-photo/couple-sitting-camping-chair-nature-600nw-2298440117.jpg"},
    { id: 3, title: "Video 3 Title", videoSrc: "https://www.youtube.com/embed/6RsuVUB44rU", imageSrc: "https://img.freepik.com/premium-photo/group-friends-enjoying-fresh-air-beautiful-view-near-camper-car-camping-travel-holiday_985206-220.jpg"},
    { id: 4, title: "Video 4 Title", videoSrc: "https://www.youtube.com/embed/9NpSU-j6eV8", imageSrc: "https://media.istockphoto.com/id/601358146/photo/caravan-car-travels-on-the-highway.jpg?s=612x612&w=0&k=20&c=LjmbKGvNKE4hbkaLeB3R7oMEF9BBygRborAAUVVZtDM="},
    { id: 5, title: "Video 5 Title", videoSrc: "https://www.youtube.com/embed/9-EfH6MTPW8", imageSrc: "https://hips.hearstapps.com/hmg-prod/images/car-camping-1644011358.jpeg"},
    { id: 6, title: "Video 6 Title", videoSrc: "https://www.youtube.com/embed/gYn6_ls662Q", imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/6d/0e/c9/a-camping-car-gives-incredibly.jpg?w=1200&h=-1&s=1"},
    { id: 7, title: "Video 7 Title", videoSrc: "https://www.youtube.com/embed/Kq8mtJKizCo", imageSrc: "https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,g_xy_center,h_640,w_640,x_2128,y_1529/f_jpg/q_65/v1/clients/norway/Trollveggen_M_re_og_Romsdal_Terje_Borud_VisitNorway_com_6ca7ff1c_98df_409a_9ede_865f79d62c00_47da7da4-1525-4e92-a90b-fe2d5578fcfe.jpg?_a=BATCtdAA0"},
    { id: 8, title: "Video 8 Title", videoSrc: "https://www.youtube.com/embed/2lDqDSPhozU", imageSrc: "https://media.istockphoto.com/id/1429557222/photo/caravan-travel.jpg?s=612x612&w=0&k=20&c=7ksG9pI_rypcJtFkMKh26LLJY98FNsxt8jEVIe0RStU="},
  ];

  return (
    <Video_ConTainer>  
       
      <div  className='video_con_2'>
        {modals.map((modal, index) => (

          <div key={index}  className='video_con_3'>   

            <div className='img_wrap-2'>
            <img  className='img_wrap-3'
              src={modal.imageSrc}
              alt={`Image ${index + 1}`}
              onClick={() => setSelectedIndex(modal.id)}
              style={{
                width: '100%',
                height: '100%',
                cursor: 'pointer',
                borderRadius:'20px',
                border:'none',
                // background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)',
                
              }}
              // onClick={() => setSelectedIndex(modal.id)}
            /></div>

            <div className='img_wrap'
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              }}
              onClick={() => setSelectedIndex(modal.id)}
            >
             <Button> <img src={down} alt="" /></Button>
            </div>
          </div>
        ))}
      </div>

      {modals.map((modal) => (
        <Modal
          key={modal.id}
          open={selectedIndex === modal.id}
          onClose={() => setSelectedIndex(null)}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100vw',
              maxWidth: '850px',
              height: '480px',
              borderRadius: '20px',
              bgcolor: 'background.paper',
              boxShadow: 1,
              p: 4,
            }}
          >
            <Typography
              variant="h6"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {modal.title}
              <h4 onClick={() => setSelectedIndex(null)} style={{ cursor: 'pointer' }}>
                x
              </h4>
            </Typography>

            <Box sx={{ mt: 2.5, position: 'relative', paddingBottom: '0%', height: 0 }}>
              <iframe
                src={modal.videoSrc}
                title={modal.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  borderRadius: '20px',
                  width: '100%',
                  maxWidth: '790px',
                  height: '360px',
                }}
              />
            </Box>
          </Box>
        </Modal>
      ))}
    
    </Video_ConTainer>
  );
};

export default App; 

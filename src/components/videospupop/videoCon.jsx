import React, { useState } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import { Video_ConTainer } from './video';

const App = () => {
    const [openModalIndex, setOpenModalIndex] = useState(null);

    const modals = [
        { title:"YouTube video player", videoSrc: "https://www.youtube.com/embed/ayEvqETlBs8?si=RnONbQGynFs5zdCP&amp;start=3",imageSrc: "https://m.media-amazon.com/images/I/91+37-b-bkL._AC_UF1000,1000_QL80_.jpg" },
        { title:"YouTube video player", videoSrc: "https://www.youtube.com/embed/RQL0Ld7E6DA?si=rEaqrMz64xPl0Pre&amp;start=3",imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRID6mBWrcXrK_Iie3ODs9qCpQ5OANI1BJ5A&s" },
        { title:"YouTube video player", videoSrc: "https://www.youtube.com/embed/6RsuVUB44rU?si=0O0o7UJJLxpGDLah&amp;start=3",imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtqkt2z3LE4615L4joaxg02YGbgm56-RvNg&s" },
        { title:"YouTube video player", videoSrc: "https://www.youtube.com/embed/9NpSU-j6eV8?si=Mg0C1rAKW5NZYvTd&amp;start=3",imageSrc: "https://as1.ftcdn.net/v2/jpg/05/79/60/84/1000_F_579608425_5t3ShGWRvdsLIDjcEWOK8G3oaUGE4taX.jpg" },
        { title:"YouTube video player", videoSrc: "https://www.youtube.com/embed/9-EfH6MTPW8?si=CChmvtQSYrQQ0vLU&amp;start=3",imageSrc: "https://www.schaeferautobody.com/wp-content/uploads/2020/06/car-camping.jpeg" },
        { title:"YouTube video player", videoSrc: "https://www.youtube.com/embed/gYn6_ls662Q?si=vrYRaVo7sk_10hRv&amp;start=3",imageSrc: "https://cdn.shopify.com/s/files/1/2254/0887/files/Car_Camping_-_7_1024x1024.jpg?v=1682101018" },
        { title:"YouTube video player", videoSrc: "https://www.youtube.com/embed/Kq8mtJKizCo?si=4qg210vuSxB6LxZT&amp;start=3",imageSrc: "https://www.pruvo.com/blog/wp-content/uploads/2021/12/image-5.png" },
        { title:"YouTube video player", videoSrc: "https://www.youtube.com/embed/2lDqDSPhozU?si=SAge5UQg2FuTH37K&amp;start=3",imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvuOVD1pIIAgW5mjLc9d74oowuQQVSQgi3cA&s" }
    ];

    const handleOpen = (index) => setOpenModalIndex(index);
    const handleClose = () => setOpenModalIndex(null);

    return (
      <>
      <Video_ConTainer>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {modals.map((modal, index) => (
                <img
                    key={index}
                    src={modal.imageSrc}
                    alt={`Video ${index + 1}`}
                    onClick={() => handleOpen(index)}
                    style={{
                        cursor: 'pointer',
                        margin: '10px',
                        width: '292px',
                        height: '292px',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.30)',
                    }}
                />
            ))}

            {modals.map((modal, index) => (
                <Modal key={index} open={openModalIndex === index} onClose={handleClose}>
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        border:"none",
                        width:"100vw",
                       
                        maxWidth: "850px",
                        height:"480px",
                        borderRadius:"20px",
                        bgcolor: 'background.paper',
                        boxShadow: 1,
                        p: 4,
                    }}>
                        <Typography variant="h6" style={{
                          display:"flex",
                          justifyContent:"space-between",
                        }}>{modal.title} 
                        <h4 onClick={handleClose} variant="contained" sx={{ mt: 2 }}>
                            x
                        </h4>
                        </Typography>
                        <Box sx={{ mt: 2.5, position: 'relative', paddingBottom: '0%', height: 0,border: "none" }}>
                            <iframe
                                src={modal.videoSrc}
                                title={modal.title}
                                frameBorder="0"
                                allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    borderRadius:"20px",
                                    width:"100%",
                                    maxWidth: '790px',
                                    height: '360px',
                                }}
                            />
                        </Box>
                    </Box>
                </Modal>
            ))}
        </div></Video_ConTainer></>
    );
};

export default App;





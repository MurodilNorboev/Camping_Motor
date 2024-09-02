
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './main.css'
import Responsive from "./multiCarusel/multiCon";
import { useState } from "react";
// import car0 from '../../assets/car1.svg'
import { BlogsCon } from "./mainStyle";
import img_camp1 from '../../assets/img_main1.svg'
import img_camp2 from '../../assets/img_main2.svg'
import img_camp3 from '../../assets/img_main3.svg'
import img_camp4 from '../../assets/img_main6.svg'
import img_camp5 from '../../assets/img_main7.png'
import img_camp6 from '../../assets/img_main8.svg'
import VideoComponent from "../videospupop/video"
import App from "../videospupop/videoCon";

export const MainComponent = () => {
 
        return (
          <>
          
            <Carousel  className='carusel' showThumbs={false}>
                <div className='carusel_img'>
                  <img src="" alt="" />
                </div>
                <div className='carusel_img2'>
                  <img src="" alt="" />
                </div>
                <div className='carusel_img3' >
                  <img src="" alt="" />
                </div>
            </Carousel>
           
            <Responsive />
            
            <App />
            <BlogsCon>
              <div className="blogs-wrap"> <h2>Blogs</h2></div>

              <div className="img_wra-p">

                <div className="loremWrep">
                  <h3>Camper</h3>
                  <h4>@campar_1</h4>
                  <div><p>Camping truly is for everyone, from your oldest <br /> family member to little campers just trekking <br /> out for the first time. Whether your plan is to <br /> relax, explore or reconnect, CAMPER <br /> campgrounds are a great place to create <br /> memories with those you love.</p></div>
                </div>

                <div className="img_wrap_Containers">
                <img src={img_camp1} alt="img-camping-main"  />
                <img src={img_camp2} alt="img-camping-main"  />
                <img src={img_camp3} alt="img-camping-main"  />
                <img src={img_camp4} alt="img-camping-main"  />
                <img src={img_camp6} alt="img-camping-main"  />
                <img src={img_camp5} alt="img-camping-main"  />
                </div>

              </div>
            </BlogsCon>
           
          </>
        );
     } 

    
export default MainComponent



import React from 'react'
import  bg1 from './../../assets/instruction-bg.png'
import offerImg from  './../../assets/offerImg.jpg'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {PATH} from "../../App";
import { NavLink } from 'react-router-dom'
import cl from './offer.module.css'


const Offer = () => {
    return (
        <div className={cl.offerWrap}>
            <Carousel showArrows={true}
                      showThumbs={false}
                      width={'400px'}
                      thumbWidth={90}
                      centerSlidePercentage={2}
            >
                <div>
                    <img src={offerImg} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={bg1} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={bg1} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <NavLink to={PATH.START} className={cl.btnOk}>ok</NavLink>
        </div>
    );
};

export default Offer;

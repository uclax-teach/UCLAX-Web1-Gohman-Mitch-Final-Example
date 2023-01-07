import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

/* Scripts ---------------------------*/
import { slidesData } from './slidesData.js';

/* Component ---------------------------*/
import Slide from './Slide.jsx';

const Slideshow = () => {
    return (
        <SlideshowStyled className="Slideshow">
            <Carousel autoPlay={true} infiniteLoop={true}>
                {slidesData.map((slide) => {
                    return <Slide key={slide.id} slide={slide} />;
                })}
            </Carousel>
        </SlideshowStyled>
    );
};

export default Slideshow;

const SlideshowStyled = styled.div`
    .carousel .slide .legend {
        /* background-color: #f26422; */
    }
`;

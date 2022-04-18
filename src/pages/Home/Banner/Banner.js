import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-height"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Success</h3>
                    <p>Stay here and get success</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-height"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Learn</h3>
                    <p>Learn Everything quickly.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-height"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Explore Idea</h3>
                    <p>Explore your idea.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
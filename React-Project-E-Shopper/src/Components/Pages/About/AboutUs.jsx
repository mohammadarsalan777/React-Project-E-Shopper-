import React from "react";
import Banner from "../../../Images/banner image.jpg";
import logo from '../../../Images/logo.png'
import { Button } from "react-bootstrap";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const AboutUs = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };


    return (
        <div className="container mt-5">
            <div className="row shadow bg-white rounded d-flex">

                <div className="col-md-12 d-flex col-12">
                    <h1 className="text-danger text-center mt-5 mb-5 d-flex justify-content-between align-item-center" style={{ fontSize: '60px' }}>
                        <img src={logo} alt="" height={'100px'} />
                        E-Shopper


                    </h1>
                </div>



            </div>
            <div className="row shadow bg-white rounded mt-5 mb-5">
                <div className="col-lg-6 mb-3 text-right mt-5 ">
                    <h1 style={{ fontSize: '50px', fontWeight: '700', fontFamily: 'Arial' }}>Start your shopping with us</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                        doloremque deserunt nam voluptas, accusamus molestiae nisi, culpa
                        aperiam perferendis in quod fugit.
                    </p>
                    <div className=" text-center">
                        <a href='/product'>
                            <Button className="btn-xl text-light" variant="danger btn-outline-dark" style={{ width: '200px', fontSize: '20px' }}>Get Started</Button>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src={Banner} alt="" width={'550px'} style={{ borderRadius: '10px' }} />
                    {/* {/* <ControlledCarousel /> */}
                </div>
            </div>
            <h1 className="mt-5 mb-5 text-center mt-5 mb-5">
                <h4>Technology that grows with your online business</h4>
                <h1>Accomplish more than just selling.</h1>
            </h1>

            <div className="row">
                {/* <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <Banner text="First slide" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel> */}
            </div>
        </div>
    );
};

export default AboutUs;

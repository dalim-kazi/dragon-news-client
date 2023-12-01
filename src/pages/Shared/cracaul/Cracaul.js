import React from 'react';
import './cracaul.css'
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../../assets/brands/brand1.png'
import brand2 from '../../../assets/brands/brand2.png'
import  brand3 from '../../../assets/brands/brand3.png'
const Cracaul = () => {
    return (
        <div>
             <Carousel className=' '>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 lg:w-full"
          src= {brand1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 lg:w-100"
          src= {brand2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 lg:w-100"
          src= {brand3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Cracaul;
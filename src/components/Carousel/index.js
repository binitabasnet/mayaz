import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselComponent = ({ images }) => {
  return (
    <>
      <div className="carousel position-absolute">
        <Carousel fade>
          {images.map((image, i) => (
            <Carousel.Item key={i}>
              <img src={image.url} alt={image.name} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComponent;

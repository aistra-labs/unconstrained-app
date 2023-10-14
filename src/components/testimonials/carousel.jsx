import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { image } from '../images';
import NameStrip from '../name-strip';

function CarouselItem({ ix }) {
    return (<div className="carousel-slide-container">
        <div className="card">
            <div className='testimonial-container'>
                <img src={image['doublequotes.jpg']} className="card-image" />
                <h2 className="testimonial">
                    This product brings so much value. I LOVE IT!This product brings so much value. I LOVE IT!This product brings so much value. I LOVE IT!This product brings so much value. I LOVE IT!This product brings so much value. I LOVE IT!This product brings so much value. I LOVE IT!This product brings so much value. I LOVE IT!This product brings so much value. I LOVE IT!This product brings so much value. I LOVE IT!This product brings so much value. I LOVE IT!"
                </h2>
                <NameStrip />
            </div>

            {/* <img src={imageUrl} alt={header} className="card-image" />
      <div className="card-content">
        <h2 className="card-header">{header}</h2>
        <p className="card-description">{description}</p>
      </div> */}
        </div>
        <div className="card">
            2
        </div>
        <div className="card">
            3
        </div>
        <Carousel.Caption>
            <h3>{ix} slide label</h3>
        </Carousel.Caption>
    </div>)
}

function CardsCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" controls={false}>
            <Carousel.Item>
                <CarouselItem ix={1} />
            </Carousel.Item>
            <Carousel.Item>
                <CarouselItem ix={2} />
            </Carousel.Item>
            <Carousel.Item>
                <CarouselItem ix={3} />
            </Carousel.Item>
        </Carousel>
    );
}

export default CardsCarousel;

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { images } from '../images';
import NameStrip from '../name-strip';
import data from './data';
import { groupTestimony } from './data-helper';

function CarouselItem({ data }) {
    return (<div className="carousel-slide-container">
        {data?.map(cardData => {
            return (
                <div className="card" key={cardData.id}>
                    <div className='testimonial-container'>
                        <img src={images['doublequotes.jpg']} alt="quotes" className="card-image" />
                        <h2 className="testimonial">
                            {cardData.desc}
                        </h2>
                    </div>
                    <NameStrip
                        name={cardData.name}
                        image={cardData.image}
                        position={cardData.position}
                        rating={cardData.rating}
                    />
                </div>);
        })}
    </div>)
}

function CardsCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const { innerWidth: width } = window;
    const testimonyData = groupTestimony(data, width <= 767 ? 1 : 3);

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" controls={false}>
            {testimonyData.map((groupData, i) => {
                return (
                    <Carousel.Item key={i}>
                        <CarouselItem data={groupData} />
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
}

export default CardsCarousel;

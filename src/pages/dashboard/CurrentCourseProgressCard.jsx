import React, { memo } from "react";
import Carousel from 'react-bootstrap/Carousel';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import './CurrentCourseProgressCard.css';
import { images } from "../../components/images";

const cardData = [
  {
    id: 1,
    title: "Current Course Progress",
    image: images['ai-learninng-design.png'],
    contentTitle: "COURSE",
    contentSubTitle: "AI Enhanced Learning Design",
    contentText: "Great work so far, Samantha!",
    progressPercentage: 67,
    progressText: "67% completed"
  },
  {
    id: 1,
    title: "test",
    image: images['alex.jpg'],
    contentTitle: "COURSE",
    contentSubTitle: "AI Enhanced Learning Design",
    contentText: "Great work so far, Samantha!",
    progressPercentage: 67,
    progressText: "67% completed"
  }
];

function CarouselItem({ data }) {
  return (
    <div className="card-container">
      <div className="card-title">
        {data.title}
      </div>
      <div className="card-content-container">
        <img className="card-img" src={data.image} loading="lazy" alt="ai-learninng-design" />
        <div className="card-bottom-container">
          <p className="content-title">
            {data.contentTitle}
          </p>
          <p className="content-sub-title">
            {data.contentSubTitle}
          </p>
          <div className="content-text-block">
            <div className="content-text-left-content">
              <p className="content-text">
                {data.contentText}
              </p>
              <div className="progress-bar-block">
                <ProgressBar className="course-progress-bar" now={67} />
                <div className="progress-bar-text">
                  {data.progressText}
                </div>
              </div>
            </div>
            <Button
              className="go-to-course-btn"
              variant="outline-primary"
            >
              Go to Course
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CurrentCourseProgressCard = () => {

  return (
    <Carousel className="carousel-container" controls={false} slide={false} interval={null}>
      {cardData.map((data, i) => {
        return (
          <Carousel.Item key={i}>
            <CarouselItem data={data} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default memo(CurrentCourseProgressCard);

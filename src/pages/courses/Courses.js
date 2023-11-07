/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo } from "react";
import Slider from "react-slick";
import "./courses.css";
import { images } from "../../components/images";
import CourseCard from "../../components/courseCard/CourseCard";

const Courses = () => {

  const cardData = [
    {
      header: "AI for Routine Tasks: Coming Soon",
      description: "Learn how to automate your workflows related to email, report writing, and other non-student related tasks.",
      imageUrl: images['course1.png'],
      rating: '4.7',
      review: '207'
    },
    {
      header: "AI for Assessment: Coming Soon",
      description: "Learn how to use AI to give feedback to your students, create assessments, and support grading, as well as how to create AI Proof assignments (and it's not using an AI detector).",
      imageUrl: images['course2.png'],
      rating: '4.7',
      review: '720'
    },
    {
      header: "AI for Differentiation: Coming Soon",
      description: "Learn how to use AI to create lessons, units, and assignments that meet the diverse needs of your students and inspire them based on their interests.",
      imageUrl: images['course3.png'],
      rating: '4.7',
      review: '480'
    },
    {
      header: "AI for Routine Tasks",
      description: "AI is a powerful tool that can be used to automate routine tasks. This can free up employees to focus on more strategic and creative work, which can lead to increased productivity and innovation",
      imageUrl: images['course1.png'],
      rating: '4.7',
      review: '207'
    },
    {
      header: "AI for Assessment",
      description: "AI in assessments can be used to administer situational judgment tests using realistic, chatbot-style conversations with candidates.",
      imageUrl: images['course2.png'],
      rating: '4.7',
      review: '720'
    },
  ];

  const NextArrow = (props) => (
    <div
      {...props}
      className="arrow-container"
    >
      <img className="right-arrow" src={images['right-arrow.svg']} loading="lazy" alt="Next" />
    </div>
  );

  const PrevArrow = (props) => (
    <div
      {...props}
      className="arrow-container"
    >
      <img className="left-arrow" src={images['left-arrow.svg']} loading="lazy" alt="Previous" />
    </div>
  );

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth < 768 ? 1 : 3,
    slidesToScroll: 1,
    className: "slider-style",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="courses-container">
      <div className="courses-banner-container">
        <div className="banner-content">
          <div className="banner-title">
            <span className="orange-title">AI</span> for Learning Design
          </div>
          <div className="banner-desc">
            <div>Learning Goals:</div>
            <ul>
              <li>AI offers transformative opportunities and challenges in the educational landscape.</li>
              <li>Selecting appropriate AI tools and using them responsibly is crucial for maximizing their benefit in teaching and TIME</li>
              <li>Ethical considerations play a pivotal role in AI's adoption in the classroom.</li>
              <li>Effective integration of AI requires hands-on practice, collaboration, and reflective planning.</li>
            </ul>
          </div>
          {/* <img className="signup-btn" src={images['courses-signup-btn.svg']} loading="lazy" alt="signup button" /> */}
        </div>
        <div className="courses-banner">
          <div className="banner-image-container">
            <img className="courses-banner" src={images['course_header-img.png']} loading="lazy" alt="courses banner" />
          </div>
        </div>
      </div>
      <div className="educators-container">
        <div className="educators-header">
          <div className="title">Courses for Educators</div>
          {/* <div className="btn-container">
            <img className="view-all-btn" src={images['viewAll-btn.svg']} loading="lazy" alt="View All" />
          </div> */}
        </div>
        <div className="courses-cards">
          <Slider {...settings}>
            {cardData.map((card, index) => {
              return (
                <CourseCard
                  imageUrl={card.imageUrl}
                  key={index}
                  header={card.header}
                  description={card.description}
                  rating={card.rating}
                  review={card.review}
                />
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default memo(Courses);

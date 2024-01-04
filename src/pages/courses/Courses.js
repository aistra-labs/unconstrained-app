/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useState } from "react";
import Slider from "react-slick";
import "./courses.css";
import { images } from "../../components/images";
import { BuyCourseCard } from '../../components/courseCard/CourseCard';
import { useDispatch, useSelector } from "react-redux";
import { URLS } from "../../urls";
import { processResponse } from "../../utils";


function getPaidCourses(token, successCb, dispatch) {
  console.log('paidCourses...fn called,,,,,../.......');
  const requestObj = [URLS.GET_PURCHASED_COURSES, { headers: { token } }];
  fetch(...requestObj)
    .then(response => processResponse(response, dispatch, requestObj))
    .then(result => successCb(result?.['productList']))
    .catch(error => {
      console.log('error', error);
      successCb(null);
    });
}

const Courses = () => {
    const token = useSelector((state) => state.user.userData?.token);
    const dispatch = useDispatch();
    const [paidCourses, setPaidCourses] = useState();

    // const cardData = [
    //   // {
    //   //   header: "AI for Routine Tasks: Coming Soon",
    //   //   description: "Learn how to automate your workflows related to email, report writing, and other non-student related tasks.",
    //   //   imageUrl: images['course1.png'],
    //   //   rating: '4.7',
    //   //   review: '207'
    //   // },
    //   // {
    //   //   header: "AI for Assessment: Coming Soon",
    //   //   description: "Learn how to use AI to give feedback to your students, create assessments, and support grading, as well as how to create AI Proof assignments (and it's not using an AI detector).",
    //   //   imageUrl: images['course2.png'],
    //   //   rating: '4.7',
    //   //   review: '720'
    //   // },
    //   {
    //     header: "AI for Differentiation",
    //     description: "Create lessons, units, and assignments that meet the diverse needs of your students  Inspire students with approaches based on their interests Incorporate culturally responsive lessons, units, & assignments Collaborate to plan and reflect on effective integration of AI tools and resources",
    //     imageUrl: images['course3.png'],
    //     rating: '4.7',
    //     review: '480'
    //   },
    //   {
    //     header: "AI for Routine Tasks",
    //     description: "Evaluate and select appropriate AI tools to automate recurring tasks Train AI tools to better assist you in your role Collaborate to plan and reflect on effective integration of AI tools and resources",
    //     imageUrl: images['course1.png'],
    //     rating: '4.7',
    //     review: '207'
    //   },
    //   {
    //     header: "AI for Assessment",
    //     description: "Develop assessments using AI tools Create feedback mechanisms using AI Analyze trends in your assessment data to use for future planning Collaborate to plan and reflect on effective integration of AI tools and resources",
    //     imageUrl: images['course2.png'],
    //     rating: '4.7',
    //     review: '720'
    //   },
    //   {
    //     header: "AI for Data Analysis",
    //     description: "Evaluate and select appropriate AI tools to use with different kinds of data Understand how to collect data to more easily employ AI tools Automate data analysis so that you can get to the important work of asking questions and planning forward Analyze trends in data to use for future planning",
    //     imageUrl: images['data_analysis.png'],
    //     rating: '4.7',
    //     review: '720'
    //   },
    //   {
    //     header: "AI for Leaders",
    //     description: "Understand the roles that AI will play in education and schools in the present and future Evaluate and select appropriate AI tools to automate recurring tasks in finance, operations, HR Train AI tools to better assist you in your roles Collaborate to plan and reflect on effective integration of AI tools and resources",
    //     imageUrl: images['ai_for_leaders.png'],
    //     rating: '4.7',
    //     review: '720'
    //   },
    //   {
    //     header: "AI for Parents",
    //     description: "Understand how AI works Evaluate opportunities and challenges of using AI in education Explain how AI can support your child’s learning while upholding academic integrity",
    //     imageUrl: images['ai_for_parent.png'],
    //     rating: '4.7',
    //     review: '720'
    //   },
    // ];

    useEffect(() => {
        // if (token) {
        getPaidCourses(token, setPaidCourses, dispatch);
        localStorage.setItem('login-through-course', 'false');
        // }
    }, [dispatch, token]);

    const NextArrow = (props) => {
        const { currentSlide, slideCount, ...restProps } = props;
        return (
            <div {...restProps} className="arrow-container">
                <img className="right-arrow" src={images['right-arrow.svg']} loading="lazy" alt="Next" />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { currentSlide, slideCount, ...restProps } = props;
        return (
            <div {...restProps} className="arrow-container">
                <img className="left-arrow" src={images['left-arrow.svg']} loading="lazy" alt="Previous" />
            </div>
        );
    };

    let settings = (maxLen = 0) => ({
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: Math.min(window.innerWidth < 768 ? 1 : window.innerWidth > 1470 ? 3 : 3, maxLen),
        slidesToScroll: 1,
        className: 'slider-style',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    });

    console.log('paidCourses...', paidCourses);

    return (
        <div className="courses-container">
            <div className="courses-banner-container">
                <div className="banner-content">
                    <div className="banner-title">
                        <span className="orange-title">AI</span> for Learning Design
                    </div>
                    <div className="banner-desc">
                        <div>
                            <b>Learning Goals:</b>
                        </div>
                        <ul>
                            <li>AI offers transformative opportunities and challenges in the educational landscape.</li>
                            <li>
                                Selecting appropriate AI tools and using them responsibly is crucial for maximizing
                                their benefit in teaching and TIME.
                            </li>
                            <li>Ethical considerations play a pivotal role in AI's adoption in the classroom.</li>
                            <li>
                                Effective integration of AI requires hands-on practice, collaboration, and reflective
                                planning.
                            </li>
                        </ul>
                    </div>
                    {/* <img className="signup-btn" src={images['courses-signup-btn.svg']} loading="lazy" alt="signup button" /> */}
                </div>
                <div className="courses-banner">
                    <div className="banner-image-container">
                        <img
                            className="courses-banner"
                            src={images['course_header-img.png']}
                            loading="lazy"
                            alt="courses banner"
                        />
                    </div>
                </div>
            </div>
            {/* <div className="educators-container">
              <div className="educators-header">
                  <div className="title">Courses for Educators</div>
                  <div className="btn-container">
            <img className="view-all-btn" src={images['viewAll-btn.svg']} loading="lazy" alt="View All" />
          </div>
              </div>
              <div className="courses-cards">
                  {cardData?.length > 0 && (
                      <Slider {...settings(cardData?.length)}>
                          {cardData.map((card) => {
                              return (
                                  <CourseCard
                                      imageUrl={card.imageUrl}
                                      key={card.header}
                                      header={card.header}
                                      description={card.description}
                                      rating={card.rating}
                                      review={card.review}
                                  />
                              );
                          })}
                      </Slider>
                  )}
              </div>
          </div> */}
            <div className="educators-container">
                <div className="educators-header">
                    <div className="title">Courses for Educators</div>
                </div>
                <div className="courses-cards">
                    {paidCourses?.length > 0 && (
                        <Slider {...settings(paidCourses?.length)}>
                            {paidCourses?.map((card) => {
                                return (
                                    <BuyCourseCard
                                        imageUrl={card.imageUrl}
                                        key={card.productId}
                                        productId={card.productId}
                                        header={card.productName}
                                        isPurchased={card.isPurchased}
                                        description={card.description}
                                        startDate={card.startDate}
                                    />
                                );
                            })}
                        </Slider>
                    )}
                </div>
            </div>
        </div>
    );
};

export default memo(Courses);

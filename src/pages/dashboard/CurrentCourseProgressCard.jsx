import React, { memo, useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import './CurrentCourseProgressCard.css';
// import { images } from "../../components/images";
import { useSelector } from "react-redux";

const cardData = {
  "courses": [
    {
      "id": "631872734205",
      "name": "AI for Education Design",
      "section": "Cohort 2",
      "descriptionHeading": "AI in Education 1",
      "ownerId": "116918884464760439263",
      "creationTime": "2023-10-17T18:15:09.798Z",
      "updateTime": "2023-11-08T22:38:08.029Z",
      "courseState": "ACTIVE",
      "alternateLink": "https://classroom.google.com/c/NjMxODcyNzM0MjA1",
      "teacherGroupEmail": "Copy_of_AI_for_Education_Design_Cohort_2_teachers_86162ff3@unconstrained.work",
      "courseGroupEmail": "Copy_of_AI_for_Education_Design_Cohort_2_a284509f@unconstrained.work",
      "guardiansEnabled": false,
      "calendarId": "c_classroomcf7de375@group.calendar.google.com",
      "gradebookSettings": {
        "calculationType": "TOTAL_POINTS",
        "displaySetting": "HIDE_OVERALL_GRADE"
      }
    },
    {
      "id": "523788643592",
      "name": "AI for Education Design",
      "section": "Cohort 1",
      "descriptionHeading": "AI in Education 1",
      "room": "0",
      "ownerId": "116918884464760439263",
      "creationTime": "2023-08-28T15:35:13.229Z",
      "updateTime": "2023-10-11T02:14:35.796Z",
      "courseState": "ACTIVE",
      "alternateLink": "https://classroom.google.com/c/NTIzNzg4NjQzNTky",
      "teacherGroupEmail": "AI_in_Education_1_teachers_5efb4b2b@unconstrained.work",
      "courseGroupEmail": "AI_in_Education_1_0a27a12b@unconstrained.work",
      "guardiansEnabled": false,
      "calendarId": "c_classroomb5a14af7@group.calendar.google.com",
      "gradebookSettings": {
        "calculationType": "TOTAL_POINTS",
        "displaySetting": "HIDE_OVERALL_GRADE"
      }
    }
  ]
};

function CarouselItem({ data }) {
  const userData = useSelector((state) => state.user.userData);

  return (
    <div className="card-container">
      <div className="card-title">
        {data.name}
      </div>
      <div className="card-content-container">
        <img className="card-img" src={data.alternateLink} loading="lazy" alt="ai-learninng-design" />
        <div className="card-bottom-container">
          <p className="content-title">
            {data.section}
          </p>
          <p className="content-sub-title">
            {data.descriptionHeading}
          </p>
          <div className="content-text-block">
            <div className="content-text-left-content">
              <p className="content-text">
                {`Great work so far, ${userData?.name}!`}
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

function getCourses(token, successCb) {
  fetch("https://dev.api.unconstrained.work/classroom/course", { headers: { token } })
    .then(response => response.json())
    .then(result => successCb(result?.['courses']))
    .catch(error => {
      console.log('error', error);
      successCb(cardData?.['courses']);
    });
}

const CurrentCourseProgressCard = (props) => {
  const userData = useSelector((state) => state.user.userData);
  const [data, setData] = useState();
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    props.setCurrentCardId(data?.[selectedIndex]?.['id'])
  };

  useEffect(() => {
    props.setCurrentCardId(data?.[0]?.['id'])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    if(userData?.token) {
      getCourses(userData?.token, setData);
    }
  }, [userData?.token]);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-container" controls={false} slide={false} interval={null}>
      {data?.map((data, i) => {
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

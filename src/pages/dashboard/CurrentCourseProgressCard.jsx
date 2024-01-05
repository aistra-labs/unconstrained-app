import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import './CurrentCourseProgressCard.css';
// import { images } from "../../components/images";
import { useDispatch, useSelector } from "react-redux";
import { processResponse } from "../../utils";
import { URLS } from "../../urls";

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
        <img
          className="card-img"
          src={data?.imageLink || 'https://unconstrained-prod.s3.me-central-1.amazonaws.com/ai-learninng-design.png'}
          loading="lazy" alt="ai-learninng-design"
        />
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
            <form action={data?.alternateLink} target="_blank">
              <Button
                className="go-to-course-btn"
                variant="outline-primary"
                type="submit"
              >
                Go to Course
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function getCourses(token, successCb, dispatch) {
  const requestObj = [URLS.GET_COURSES, { headers: { token } }];
  fetch(...requestObj)
    .then(response => processResponse(response, dispatch, requestObj))
    .then(result => successCb(result?.['courses']))
    .catch(error => {
      console.log('error', error);
      successCb(cardData?.['courses']);
    });
}

const CurrentCourseProgressCard = (props) => {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
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
    if (token) {
      getCourses(token, setData, dispatch);
    }
  }, [dispatch, token]);

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

export default CurrentCourseProgressCard;

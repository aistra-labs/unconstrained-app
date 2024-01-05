import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./dashboard.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { images } from "../../components/images";
import CurrentCourseProgressCard from './CurrentCourseProgressCard';
import UpcomingAssignments from './UpcomingAssignments';
import { setUserdata, setToken } from '../../redux/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import SuccessModal from "./successPaymentModal";
import FailedModal from "./failedPaymentModal";
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const [currentCardId, setCurrentCardId] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const userData = useSelector((state) => state.user.userData);
  const isSuccess = searchParams.get("success");
  const isFailure = searchParams.get("cancel");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const profileData = {
      name: searchParams.get("name"),
      email: searchParams.get("email"),
      image: searchParams.get("image"),
    }
    const token = searchParams.get("token");
    if (token) {
      dispatch(setUserdata(profileData));
      dispatch(setToken(token));
      setSearchParams('');
    }
    const redirectPage = localStorage.getItem('login-through-course') === 'true';
    if (redirectPage) {
      navigate('/courses');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setShowSuccess(true);
    }
    else if (isFailure) {
      setShowFailed(true);
    }
  }, [isSuccess, isFailure])

  return (
    <div className="dashoboard-container">
      <SuccessModal show={showSuccess} handleClose={() => setShowSuccess(false)} />
      <FailedModal show={showFailed} handleClose={() => setShowFailed(false)} />
      <div className="dashboard-controller">
        <img className="tree-logo" src={images['tree.svg']} loading="lazy" alt="avatarLogo" />
        {/* <img className="dashboard-avatar" src={images['dashboardAvatar.png']} loading="lazy" alt="avatar logo" /> */}
        <img className="dashboard-avatar" referrerPolicy="no-referrer" src={userData?.image} loading="lazy" alt="avatar logo" />
        <div className="welcome-text"> <span>Welcome, {userData?.name}!</span></div>
        <div className="university-logo-block">
          <img className="university-logo" src={images['university.svg']} loading="lazy" alt="university logo" />
          <img className="university-campus-logo" src={images['universityCampus.svg']} loading="lazy" alt="avatarLogo" />
          <img className="university-star-logo" src={images['universityStar.svg']} loading="lazy" alt="avatarLogo" />
        </div>
      </div>
      <Tabs
        defaultActiveKey="dashboard"
        variant='underline'
        id="uncontrolled-tab-example"
        className="tabs-controller"
      >
        <Tab eventKey="dashboard" title="DASHBOARD" tabClassName="tab-content">
          <div className="dashboard-layout">
            <CurrentCourseProgressCard setCurrentCardId={setCurrentCardId} />
            <UpcomingAssignments currentCardId={currentCardId} />
          </div>
        </Tab>
        <Tab eventKey="Dashboard" title="COURSES" tabClassName="tab-content">
          Tab content for SAVED COURSES
        </Tab>
        <Tab eventKey="savedCourses" title="SAVED COURSES" tabClassName="tab-content">
          Tab content for SAVED COURSES
        </Tab>
      </Tabs>
    </div>
  );
};

export default Dashboard;

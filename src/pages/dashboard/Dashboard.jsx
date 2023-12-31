import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { images } from "../../components/images";
import CurrentCourseProgressCard from './CurrentCourseProgressCard';
import UpcomingAssignments from './UpcomingAssignments';
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import useLogin from "../loginHandle/useLogin";

const Dashboard = () => {
  const [currentCardId, setCurrentCardId] = useState();
  const userData = useSelector((state) => state.user.userData);
  const { showPaymentStatusModal } = useLogin();
  const navigate = useNavigate();
  useEffect(() => {
    const redirectPage = localStorage.getItem('login-through-course') === 'true';
    if (redirectPage) {
      navigate('/courses');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="dashoboard-container">
      {showPaymentStatusModal()}
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

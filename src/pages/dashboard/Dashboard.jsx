import React, { memo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./dashboard.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { images } from "../../components/images";
import CurrentCourseProgressCard from './CurrentCourseProgressCard';
import UpcomingAssignments from './UpcomingAssignments';
import { setUserdata } from '../../redux/userSlice'
import { useSelector, useDispatch } from 'react-redux'

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const userData = useSelector((state) => state.user.userData)
  const dispatch = useDispatch()
  useEffect(() => {
    const profileData = {
      cookie: searchParams.get("cookie"),
      name: searchParams.get("name"),
      email: searchParams.get("email"),
      image: searchParams.get("image")
    }
    if (profileData?.cookie) {
      dispatch(setUserdata(profileData))
      setSearchParams('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // http://localhost:3000/dashboard?cookie=JSESSIONID=2A52B2D288B9A0F447D23D94D8B1E5E5;%20Path=/;%20HttpOnly&name=Abhishek%20jha&email=abhishekcr@unconstrained.work&image=https://lh3.googleusercontent.com/a/ACg8ocLHYKU8Q-rCsy3PzAHLGLV7pNHJRiIts9_biKQPaswB=s96-c

  return (
    <div className="dashoboard-container">
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
            <CurrentCourseProgressCard />
            <UpcomingAssignments />
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

export default memo(Dashboard);

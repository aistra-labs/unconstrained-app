import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Header from './components/header/Header';
import Cards from './components/card';
import { useSelector } from 'react-redux';

const Header = lazy(() => import('./components/header/Header'));
const Footer = lazy(() => import('./components/footer/Footer'));
const Home = lazy(() => import('./pages/home/Home'));
// const Login = lazy(() => import('./pages/login/Login'));
const About = lazy(() => import('./pages/about/About'));
const Courses = lazy(() => import('./pages/courses/Courses'));
const Coaching = lazy(() => import('./pages/coaching/Coaching'));
const Community = lazy(() => import('./pages/community/Community'));
const Resources = lazy(() => import('./pages/resources/Resources'));
const Dashboard = lazy(() => import('./pages/dashboard'));

const PrivateRoute = () => {
  const token = useSelector((state) => state.user.token);
  return token ? <Outlet /> : <Navigate to="/" />;
}

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/community" element={<Community />} />
          <Route path="/resources" element={<PrivateRoute />}>
            <Route path="/resources" element={<Resources />} />
          </Route>
          <Route path="/cards" element={<Cards />} />
          {/* <Route path="/signin" element={<Login />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
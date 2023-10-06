import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Cards from './components/card';

const Header = lazy(() => import('./components/header/Header'));
const Footer = lazy(() => import('./components/footer/Footer'));
const Home = lazy(() => import('./components/home/Home'));
const About = lazy(() => import('./components/about/About'));
const Courses = lazy(() => import('./components/courses/Courses'));
const Coaching = lazy(() => import('./components/coaching/Coaching'));
const Community = lazy(() => import('./components/community/Community'));
const Resources = lazy(() => import('./components/resources/Resources'));

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
          <Route path="/resources" element={<Resources />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;

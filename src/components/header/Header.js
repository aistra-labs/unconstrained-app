import React, { memo, useEffect, useRef } from "react"
import "./header.css"
import { Link, useLocation } from "react-router-dom"
import { images } from "../images"

const headerLessRoutes = ['/signin']

const Header = props => {
    const location = useLocation();
    const isHeaderLessRoutes = headerLessRoutes.filter(el=>location.pathname.startsWith(el)).length>0;
    const headerRef = useRef();

    useEffect(() => {
        if (isHeaderLessRoutes) {
            headerRef.current.classList.add('display-none');
        } else {
            headerRef.current.classList.remove('display-none');
        }
    }, [isHeaderLessRoutes])
    // const navigate = useNavigate();
    // const loggeduser = localStorage.getItem("user")
    // const user = JSON.parse(loggeduser)
    // console.log("loggeduser", user)

    // if (!user) {
    //     navigate('/');
    // }

    // const signout = () => {
    //     localStorage.removeItem("user")
    // }
    return (
        <div ref={headerRef} className="hcontainer">
            <div className="hlogo">
                <Link to="/">
                    <img src={images['new-logo.svg']} alt="Unconstrained Logo" width="280px" />
                </Link>
            </div>
            <div className="hmenu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/coaching">Coaching</Link>
                <Link to="/community">Community</Link>
                <Link to="/resources">Curated Tools</Link>
            </div>
            {/* <div className="login-btn-container">
                <img className="login-btn" src={images['Login.svg']} alt="login button" />
                <img className="login-btn" src={images['Signup.svg']} alt="signup button" />
            </div> */}
        </div>
    )
}

export default memo(Header)
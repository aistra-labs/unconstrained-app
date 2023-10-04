import React, { memo } from "react"
import "./header.css"
import { Link, useNavigate } from "react-router-dom"
import logo from '../../assets/svg/unconstrained-logo.svg'
import login from '../../assets/svg/Login.svg'
import signup from '../../assets/svg/Signup.svg'

const Header = props => {
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
        <div className="hcontainer">
            <div className="hlogo">
                <Link to="/">
                    <img src={logo} alt="Unconstrained Logo" width="280px" />
                </Link>
            </div>
            <div className="hmenu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/coaching">Coaching</Link>
                <Link to="/community">Community</Link>
                <Link to="/resources">Resources</Link>
            </div>
            <div className="login-btn">
                <img className="login-btn" src={login} alt="login button" />
                <img className="signup-btn" src={signup} alt="signup button" />
            </div>
        </div>
    )
}

export default memo(Header)
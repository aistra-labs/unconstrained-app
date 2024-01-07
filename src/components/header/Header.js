import React, { useEffect, useRef } from "react"
import "./header.css"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { images } from "../images"
import { useDispatch, useSelector } from "react-redux"
import { Dropdown } from "react-bootstrap"
// import { setUserdata } from "../../redux/userSlice"
import { logout } from "../../utils"
import { URLS } from "../../urls"
import { setUserdata, setToken } from '../../redux/userSlice'

const headerLessRoutes = ['/signin']

const Header = () => {
    const userData = useSelector((state) => state.user.userData);
    const token = useSelector((state) => state.user.token);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const isHeaderLessRoutes = headerLessRoutes.filter(el => location.pathname.startsWith(el)).length > 0;
    const headerRef = useRef();

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

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
                {/* <Link to="/community">Community</Link> */}
                <Link target="_blank" to="https://discord.com/invite/qnXPjsuv5q">Community</Link>
                {token && <Link to="/resources">Curated Tools</Link>}
            </div>
            <div className="login-btn-container">
                {token ?
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="user">
                            <img className="user" src={userData?.image} alt="user" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {/* <Dropdown.Item onClick={() => navigate('/dashboard')}>Dashboard</Dropdown.Item> */}
                            <Dropdown.Item onClick={() => logout(dispatch)}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> :
                    <Link to={URLS.GOOGLE_SIGNIN} onClick={()=>{
                        setUserdata({});
                        setToken(null);
                        }}>
                        <img className="login-btn" src={images['Login.svg']} alt="login button" />
                    </Link>
                }
            </div>
        </div>
    )
}

export default Header;
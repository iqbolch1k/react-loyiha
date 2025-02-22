import './Header.css'
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <>
            <div className="header">
                <div className="continer">
                    <div className="navbar">
                        <div className="header-logo">Prime<span className="kit">Kit</span></div>
                        <div className="header-navbar">
                            <ul>
                                <li>
                                    <NavLink to='/' className={({ isActive }) => (isActive ? "active-link" : "")}>Start</NavLink>
                                </li>
                                <li><NavLink to='/about' className={({ isActive }) => (isActive ? "active-link" : "")}>About</NavLink></li>
                                <li><a href="#">Solutions</a></li>
                                <li><a href="#">Pages</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                            <button>Get Started Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;

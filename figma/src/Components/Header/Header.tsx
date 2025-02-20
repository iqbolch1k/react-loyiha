import './Header.css'
function Header() {
    return (
        <>
            <div className="header">
                <div className="continer">
                    <div className="navbar">
                        <div className="header-logo">Prime<span className="kit">Kit</span></div>
                        <div className="header-navbar">
                            <ul>
                                <li><a className="active-nav" href="#">Start</a></li>
                                <li><a href="#">About</a></li>
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

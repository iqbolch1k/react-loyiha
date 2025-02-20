import PagesMain from "../../Pages/Pages-main/PagesMain"
import Footer from "../Footer/Footer"
import Header_pages from "../Header-pages/Header_pages"
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
                    <div>
                        <Header_pages title="Help Center">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                        </Header_pages>
                    </div>
                </div>
            </div>
            <PagesMain/>
            <Footer/>
        </>
    )
}

export default Header

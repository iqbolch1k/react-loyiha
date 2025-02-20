import './Footer.css'
function Footer() {
  return (
    <div className='continer'>
      <div className='fotter'>
        <div className='footer-one'>
          <div className="header-logo">Prime<span className="kit">Kit</span></div>
          <p>Bring a best development experience to designers and developers by offer the tools needed for having a quicks and most web projects.</p>
        </div>
        <div className='footer-two'>
          <ul className='footer-quick'>
            <li><a className='footer-quick-one' href="#">Quick Links</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">Privacy Poilcy</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <ul className='footer-quick'>
            <li><a className='footer-quick-one' href="#">Services</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Data Analysis</a></li>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Business Strategy</a></li>
          </ul>
        </div>
        <div>
          <div className='footer-thri'>
            <h3>Newsletter</h3>
            <p>Sign up and receive the latest tips via email.</p>
            <div className='button'>
              <button className='button-one'>Enter Your Mail</button>
              <button className='button-two'>Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

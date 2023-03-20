import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./Footer.css"

function Footer() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLoginPopup(true);
  };

  const handleRegisterButtonClick = () => {
    setShowRegisterPopup(true);
  };

  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.facebook.com"><FaFacebook /></a>
        <a href="https://www.twitter.com"><FaTwitter /></a>
        <a href="https://www.instagram.com"><FaInstagram /></a>
      </div>
      <div className="company-info">
        <h3>ADJ LTD</h3>
        {/* <p>Description of the company.</p> */}
      </div>
      <div className="login-register">
        <button onClick={handleLoginButtonClick}>Login</button>
        <button onClick={handleRegisterButtonClick}>Sign Up</button>
      </div>
      {showLoginPopup && (
        <div className="popup">
          <form>
            <h3 style={{color : 'black'}}>Login</h3>
            <label>
             email:
              <input type="email" placeholder='Enter your email '/>
            </label>
            <label>
              Password:
              <input type="password" placeholder='Password'/>
            </label>
            <button type="submit">Submit</button>
          </form>
          <button onClick={() => setShowLoginPopup(false)}>Close</button>
        </div>
      )}
      {showRegisterPopup && (
        <div className="popup">
          <form>
            <h3 style={{color : 'black'}}>Sign Up</h3>
            <label>
              Email:
              <input type="email" placeholder='Enter your email'/>
            </label>
            <label>
              Username:
              <input type="text" placeholder='Username' />
            </label>
            <label>
              Password:
              <input type="password" placeholder='Password' />
            </label>
            <button type="submit">Submit</button>
          </form>
          <button onClick={() => setShowRegisterPopup(false)}>Close</button>
        </div>
      )}
    </footer>
  );
}

export default Footer;

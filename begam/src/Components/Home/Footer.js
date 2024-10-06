import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top when the path changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    // If the same link is clicked, scroll to the top
    const handleLinkClick = (e) => {
      if (location.pathname === e.currentTarget.getAttribute("href")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach((link) => link.addEventListener("click", handleLinkClick));

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleLinkClick)
      );
    };
  }, [location.pathname]);


  return (
    <footer id="footer-section">
      <div className="footer-mid pt-120">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-8 col-md-8 d-flex justify-content-md-between justify-content-center align-items-center cus-grid">
              <div className="logo-section">
                <Link to="/" className="site-logo site-title">
                  <img src="/images/logo.png" alt="site-logo" />
                </Link>
              </div>
              <ul className="menu-side d-flex align-items-center" style={{minHeight:"70px"}}>
                <li><Link to="/terms" className="active" style={{fontSize:"14px",marginTop:"10px"}}>Term & Condition</Link></li>
                <li><Link to="/privacy" style={{fontSize:"14px",marginTop:"10px"}}>Privacy Policy</Link></li>
                <li><Link to="/refund" style={{fontSize:"14px",marginTop:"10px"}}>Refund Policy</Link></li>
                <li><Link to="/contact" style={{fontSize:"14px",marginTop:"10px"}}>Contact Us</Link></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end">
              <div className="right-area">
                <ul className="d-flex">
                  <li><Link ><FontAwesomeIcon icon={faYoutube} /></Link></li>
                  <li><Link ><FontAwesomeIcon icon={faXTwitter} /></Link></li>
                  <li><Link ><FontAwesomeIcon icon={faInstagram} /></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="main-content">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-12 col-md-6">
                <div className="left-area text-center">
                  <p>
                    Copyright © 2024. All Rights Reserved By
                    <Link to="/" className="footer-brand"> Daily Matches</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

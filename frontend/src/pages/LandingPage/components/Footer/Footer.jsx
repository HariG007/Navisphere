import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="page-wrapperr">
      <div id="waterdropp"></div>
      <footer>
        <div className="footer-top">
          <div className="pt-exebar"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 footer-col-3">
                <div className="widget footer_widget">
                  <h5 className="footer-title">Address</h5>
                  <div className="gem-contacts">
                    <div className="gem-contacts-item gem-contacts-address">Space Applications Centre
Jodhpur Tekra, Ambawadi Vistar P.O. <br></br>Ahmedabad - 380015 <br></br>Director: Shri N M Desai</div>
                    <div className="gem-contacts-item gem-contacts-phone">
                      <i className="fa fa-phone" aria-hidden="true"></i> Phone: <a style={{color:'blue'}} href="tel:+918022172294">+91 80 22172294</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                <div className="row">
                  <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="widget footer_widget">
                      <h5 className="footer-title">Recent News</h5>
                      <ul className="posts">
                        <li className="clearfix gem-pp-posts">
                                <Link to={'https://www.isro.gov.in/SatelliteNavigationServices.html'}>ISRO's Navigation with Indian Constellation (NavIC) system enhances India's independent regional navigation capabilities, offering precise positioning and timing information.</Link>
                        
                        </li>
                        <li className="clearfix gem-pp-posts">
                          <Link to={'https://www.isro.gov.in/Aditya_L1_SUIT.html'}>Aditya-L1's SUIT captures full-disk images of the Sun in near ultraviolet wavelengths.</Link>
                          
                        </li>
                        <li className="clearfix gem-pp-posts">
                         <Link to={'https://www.isro.gov.in/Ch3_Propulsion_Module_moved_from_Lunar_orbit_to_Earth_orbit.html'}>Returns to home Earth: Chandrayaan-3 Propulsion Module moved from Lunar orbit to Earth's orbit.</Link>
                           
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="widget">
                      <h5 className="footer-title">Email Us</h5>
                      <div className="textwidget">
                        <div role="form" className="wpcf7" id="wpcf7-f4-o1" lang="en-US" dir="ltr">
                          <form method="post" className="wpcf7-form" noValidate="novalidate">
                            <div className="contact-form-footer">
                              <p>
                                <span className="wpcf7-form-control-wrap your-first-name">
                                  <input type="text" name="your-first-name" value="" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Your name" />
                                </span>
                              </p>
                              <p>
                                <span className="wpcf7-form-control-wrap your-email_1">
                                  <input type="email" name="your-email_1" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email" aria-invalid="false" placeholder="Your email" />
                                </span>
                              </p>
                              <p>
                                <span className="wpcf7-form-control-wrap your-message">
                                  <textarea name="your-message" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Your message"></textarea>
                                </span>
                              </p>
                              <div>
                                <input type="submit" value="Send" className="wpcf7-form-control wpcf7-submit" />
                                <span className="ajax-loader"></span>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-5 col-sm-12 footer-col-4">
                <div className="widget widget_gallery gallery-grid-4">
                  <h5 className="footer-title"></h5>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-site-info">2020 © <a href="/" target="_blank">Team Twice </a> &nbsp; All Rights Reserved</div>
              </div>
              <div className="col-md-6">
                <nav id="footer-navigation" className="site-navigation footer-navigation centered-box" role="navigation">
                  <ul id="footer-menu" className="nav-menu styled clearfix inline-inside">
                    <li id="menu-item-26" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-26"><a href="#">Support</a></li>
                    <li id="menu-item-27" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27"><a href="#">Contact Us</a></li>
                    <li id="menu-item-28" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28"><a href="#">Disclaimer</a></li>
                    <li id="menu-item-29" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-29"><a href="#">Privacy Policy</a></li>
                  </ul>
                </nav>
              </div>
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

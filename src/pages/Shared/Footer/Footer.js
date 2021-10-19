import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const facebook = <FontAwesomeIcon icon={faFacebookSquare} />
const instagram = <FontAwesomeIcon icon={faInstagram} />
const twitter = <FontAwesomeIcon icon={faTwitter} />

const Footer = () => {
    return (
        <>
            <div className="footer-bg">
                <div className='container py-5'>
                    <div className="row">
                        <div className="col-lg-3 col-12 col-sm-6 col-md-6 mb-sm-5">
                            <div className="footer-item">
                                <div className="footer-logo text-white">
                                    <h3>DONTO..</h3>
                                </div>
                                <p className='mt-3'>Dental care is maintenance</p>
                                <p>of healthy teeth and cleaning</p>
                                <p> mouth for beautiful smile</p>
                                <div className="icon mt-4">
                                    <a href="#home"><span className='footer-icon'>{facebook}</span></a>
                                    <a href="#home"><span className='footer-icon'>{instagram}</span></a>
                                    <a href="#home"><span className='footer-icon'>{twitter}</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 col-sm-6 col-md-6 mb-sm-5">
                            <div className="footer-item">
                                <h3 className='mb-4'>Our Services</h3>
                                <p>General Dentistry</p>
                                <p>Oral Surgery</p>
                                <p>Dental Bridge</p>
                                <p>Root Canals</p>
                                <p>Cosmetic Braces</p>
                                <p>Pediatric Dentistry</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 col-sm-6 col-md-6">
                            <div className="footer-item">
                                <h3 className='mb-4'>Importance</h3>
                                <p>Abut us</p>
                                <p>Company</p>
                                <p>Terms & Conditions</p>
                                <p>24/7 Advance Care</p>
                                <p>Emergency Centre</p>
                                <p>Payment System</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 col-sm-6 col-md-6">
                            <div className="footer-item">
                                <h3 className='mb-4'>Contact us</h3>
                                <p>256B, West Site House</p>
                                <p>Main Town, New York</p>
                                <p>+98745 612 301</p>
                                <p>+98745 612 301</p>
                                <p>info@example.com</p>
                                <p>www.predent.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-ending-bg'>
                <div className="container text-center">
                    <p className='py-4'>© Copyright by Hossen Mahmud- 2021</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
import React from 'react';
import './About.css';
import aboutImg from '../../../images/about1 (1).png'

const About = () => {
    return (
        <div className='about-container py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 col-sm-12 col-md-6">
                        <div className="about-img text-center">
                            <img className='img-fluid' src={aboutImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 col-sm-12 col-md-6 mt-5">
                        <div className="about-info">
                            <h3>SCIENCE 2005</h3>
                            <h1 className='me-lg-5'>Keep your <span className='title-unique-color'>Teeth Clean</span> & Shine</h1>
                            <p className='mt-3'>Dental care is the maintenance of healthy teeth and the practice of keeping the mouth and teeth clean pur sue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone</p>
                            <strong>You need to brush your teeth everyday for healty teeth and simle <br></br></strong>
                            <button className='button-btn mt-4'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
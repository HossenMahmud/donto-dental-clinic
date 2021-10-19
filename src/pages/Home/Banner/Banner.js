import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-bg'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 col-md-8">
                        <div className="banner-info ms-lg-5">
                            <h2>DENTAL CARE</h2>
                            <h1>Always Smile Like Twinke</h1>
                            <p>Dental care is the maintenance of healthy teeth and the practice of keeping the mouth and teeth clean.</p>
                            <button className='button-btn btn-res'>Request An Appointment</button>
                            <button className='button-btn ms-sm-3'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
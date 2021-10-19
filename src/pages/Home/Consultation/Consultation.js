import React from 'react';
import './Consultation.css';

const Consultation = () => {
    return (
        <div className='consultation-bg'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className=" text-center consultation-info">
                            <h2>Call Now and Get a Free Consultation</h2>
                            <p>Let our team handle all your dental healthcare issues.</p>
                            <h4>Free Consultation from Our Expert Advisors</h4>
                            <h1>+800 4759 1232</h1>
                            <button className='button-btn mt-3'>Request a Callback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consultation;
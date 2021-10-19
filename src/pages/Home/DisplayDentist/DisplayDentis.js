import React from 'react';
import './DisplayDentis.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookSquare, faInstagram, faTwitter, fa } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons'

// const facebook = <FontAwesomeIcon icon={faFacebookSquare} />
// const instagram = <FontAwesomeIcon icon={faInstagram} />
// const twitter = <FontAwesomeIcon icon={faTwitter} />
const heart = <FontAwesomeIcon icon={faHeart} />
const clock = <FontAwesomeIcon icon={faClock} />

const DisplayDentis = (props) => {
    const { name, img, dept, rating, visit_hour } = props.dentist;
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
            <div className="dentist-item">
                <div className="dentist-img">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="dentist-info">
                    <h4>{name}</h4>
                    <h6>{dept}</h6>
                    <div className='d-flex justify-content-between mt-4'>
                        <p><span className='d-icon'>{heart}</span> {rating}</p>
                        <p><span className='clock-icon'>{clock}</span> {visit_hour}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayDentis;
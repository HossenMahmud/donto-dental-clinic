import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayService.css';

const DisplayService = (props) => {
    const { id, service_name, img, title } = props.service;
    return (
        <div className='col-lg-4 col-md-6 col-12 col-sm-12 text-center mb-4'>
            <div className="service-item py-4">
                <div className="service-img">
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div className='service-info mx-5 mt-3'>
                    <h3>{service_name}</h3>
                    <p>{title}</p>
                    <Link to={`/service/${id}`}>More Details</Link>
                </div>
            </div>
        </div>
    );
};

export default DisplayService;
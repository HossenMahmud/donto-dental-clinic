import React, { useEffect, useState } from 'react';
import DisplayService from '../DisplayService/DisplayService';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/ServicesFakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className='service-bg'>
            <div className='container mt-5'>
                <div className="row">
                    <div className="service-title text-center">
                        <h1>Our Services </h1>
                    </div>
                </div>
                <div className="row my-5">
                    {
                        services.map(service => <DisplayService
                            key={service.id}
                            service={service}
                        ></DisplayService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
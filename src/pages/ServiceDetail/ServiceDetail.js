import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const { id } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/ServicesFakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const ExactService = services.filter(td => td.id === parseInt(id));
    return (
        <>
            <div className='servieDetail-banner'>
                <div className="container text-center text-white">
                    <h3>SERVICE DETAILS</h3>
                    <h1 className='service-detail-name'>{ExactService[0]?.service_name}</h1>
                </div>
            </div>
            <div className='container my-5'>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ser-img">
                            <img className='img-fluid' src={ExactService[0]?.detail_img} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service-detail-title">
                            <h2>{ExactService[0]?.title}</h2>
                        </div>
                        <div className="service-list-point mt-3">
                            <li> Improve the oral and teeth health</li>
                            <li>Ensure a happy smile of clients</li>
                            <li>  Provide quality services to every client</li>
                            <li>Improved appearance & speech</li>
                            <li>  Improved comfort & easier eating</li>
                            <li> Higher durability & convenience</li>
                        </div>
                        <h2 className='mt-3'>Price: ${ExactService[0]?.price}</h2>
                    </div>
                    <div className="col-lg-12 mt-3">
                        <div className="service-details-des">
                            <p>{ExactService[0]?.des}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetail;
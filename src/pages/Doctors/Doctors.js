import React, { useEffect, useState } from 'react';
import DisplayDentis from '../Home/DisplayDentist/DisplayDentis';
import './Doctors.css';
import brand1 from '../../images/brand1.png';
import brand2 from '../../images/brand2.png';
import brand3 from '../../images/brand3.png';
import brand4 from '../../images/brand4.png';
import brand5 from '../../images/brand5.png';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./DentistsFakeData.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    return (
        <>
            {/* Doctor list Area */}
            <div className='dentist-bg'>
                <div className="container">
                    <div className="dintist-title text-center">
                        <h1>Our Specialist</h1>
                    </div>
                    <div className="row mt-4">
                        {
                            doctors.map(dentist => <DisplayDentis
                                key={dentist.id}
                                dentist={dentist}
                            ></DisplayDentis>)
                        }
                    </div>
                </div>
            </div>
            {/* Partners Area */}
            <div className='container py-5'>
                <div className="row">
                    <div className="col-lg-6 col-12 col-sm-12 col-md-12">
                        <div className="partners-info">
                            <h3>PARTNERS</h3>
                            <h1>Our <span className='partners-unique-title'>Partners love</span> to work</h1>
                            <p>Dental care is the maintenance of healthy teeth and the practice of keeping the mouth and teeth clean pur sue pleasure rationally encounter consequence</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 col-sm-12 col-md-12">
                        <div className="row">
                            <div className="col-lg-4 mb-4 col-6 col-sm-6 col-md-4">
                                <div className="brand-img">
                                    <img src={brand1} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 col-6 col-sm-6 col-md-4">
                                <div className="brand-img">
                                    <img src={brand2} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 col-6 col-sm-6 col-md-4">
                                <div className="brand-img">
                                    <img src={brand3} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-6 col-sm-6 col-md-4">
                                <div className="brand-img">
                                    <img src={brand4} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-6 col-sm-6 col-md-4">
                                <div className="brand-img">
                                    <img src={brand5} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-6 col-sm-6 col-md-4">
                                <div className="brand-img">
                                    <img src={brand1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Doctors;
import React from 'react';
import Gallery from '../Gallery/Gallery';
import './Appointment.css';

const Appointment = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 col-md-12 col-12 mx-auto">
                        <div className='form'>
                            <div className='text-center appli-title py-1'>
                                <h2>Appointment Request</h2>
                            </div>
                            <div className='px-3 py-2'>
                                <label>Name</label>
                                <input type="text" id="lname" placeholder="Your Name" />
                                <label>Email</label>
                                <input type="email" id="lname" placeholder="Your Email" />
                                <label>Phone</label>
                                <input type="number" id="lname" placeholder="Your Phone Number" />
                                <label>Subject</label>
                                <textarea id="w3review" name="w3review" rows="4" cols="50" />
                                <input type="submit" value="Submit" />
                            </div>
                        </div>
                    </div >
                </div >
            </div >
            <Gallery></Gallery>
        </div>
    );
};

export default Appointment;
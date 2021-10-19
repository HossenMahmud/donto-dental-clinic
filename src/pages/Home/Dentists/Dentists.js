import React, { useEffect, useState } from 'react';
import DisplayDentis from '../DisplayDentist/DisplayDentis';
import './Dentists.css';

const Dentists = () => {
    const [dentsits, setDentsits] = useState([]);
    useEffect(() => {
        fetch('./DentistsFakeData.json')
            .then(res => res.json())
            .then(data => setDentsits(data))
    }, []);
    return (
        <div className='dentist-bg'>
            <div className="container">
                <div className="dintist-title text-center">
                    <h1>Our Dentists</h1>
                </div>
                <div className="row mt-4">
                    {
                        dentsits.slice(0, 4).map(dentist => <DisplayDentis
                            key={dentist.id}
                            dentist={dentist}
                        ></DisplayDentis>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Dentists;
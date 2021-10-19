import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Consultation from '../Consultation/Consultation';
import Dentists from '../Dentists/Dentists';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Consultation></Consultation>
            <Dentists></Dentists>
        </div>
    );
};

export default Home;
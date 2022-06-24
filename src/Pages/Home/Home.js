import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import DentalCare from './DentalCare/DentalCare';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="px-12">
                <Info />
                <Services />
                <DentalCare />
            </div>
            <MakeAppointment />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
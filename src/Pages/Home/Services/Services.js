import React from 'react';
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            img: fluoride,
            serviceTitle: "Fluoride Treatment",
            serviceDetail: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities."
        },
        {
            _id: 2,
            img: cavity,
            serviceTitle: "Cavity Filling",
            serviceDetail: "Cavities are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes."
        },
        {
            _id: 3,
            img: whitening,
            serviceTitle: "Teeth Whitening",
            serviceDetail: "Whitening your teeth too often increases the risk of negative side effects, such as tooth sensitivity and damage to tooth enamel and gums."
        },
    ]
    return (
        <section className='my-20'>
            <div className='text-center'>
                <h3 className='text-xl text-primary font-bold uppercase'>our services</h3>
                <h1 className='text-4xl'>Services We Provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </div>
        </section>
    );
};

export default Services;
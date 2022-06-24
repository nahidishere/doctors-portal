import React from 'react';
import quote from "../../../assets/icons/quote.svg"
import people1 from "../../../assets/images/people1.png"
import people2 from "../../../assets/images/people2.png"
import people3 from "../../../assets/images/people3.png"
import Testimonial from './Testimonial';

const Testimonials = () => {
    const testimonials = [
        {
            _id: 1,
            name: "Lionel messi",
            city: "Rosario",
            img: people1,
            info: "Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team."
        },
        {
            _id: 2,
            name: "Jennifer Lawrence",
            city: "Indiana Hills",
            img: people2,
            info: "Jennifer Shrader Lawrence is an American actress. The world's highest-paid actress in 2015 and 2016, her films have grossed over $6 billion worldwide to date."
        },
        {
            _id: 3,
            name: "Selina Gomez",
            city: "Texas",
            img: people3,
            info: "Selena Marie Gomez is an American singer, actress, and producer. She has been regarded by media outlets. Gomez began her acting career on the children's television series Barney & Friends."
        },
    ]
    return (
        <section className='px-12 my-10'>
            <div className='flex justify-between items-start'>
                <div>
                    <h2 className="text-xl text-primary font-bold">Testimonial</h2>
                    <h1 className="text-4xl">What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-44 h-40' src={quote} alt="Quote" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    testimonials.map(testimonial => <Testimonial key={testimonial._id} testimonial={testimonial} />)
                }
            </div>
        </section>
    );
};

export default Testimonials;
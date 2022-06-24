import React from 'react';

const Testimonial = ({ testimonial }) => {
    return (
        <div className='shadow-xl px-5 py-7'>
            <p>{testimonial.info}</p>
            <div className="flex mt-3 items-center gap-2">
                <div>
                    <img src={testimonial.img} alt="" />
                </div>
                <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p>{testimonial.city}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
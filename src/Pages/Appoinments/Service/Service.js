import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl text-secondary text-center">{name}</h2>
                <p className="text-center">{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red'>No slot available</span>} available.</p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? "slots" : "slot"} available.</p>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreatment(service)} htmlFor="booking-form" className="btn btn-secondary uppercase" disabled={slots.length === 0}>Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;
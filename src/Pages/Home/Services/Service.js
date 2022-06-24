import React from 'react';

const Service = ({ service }) => {
    const { img, serviceTitle, serviceDetail } = service;
    return (
        <div className="card bg-base-100 shadow-xl p-3 my-2">
            <figure><img src={img} alt={serviceTitle} /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceTitle}</h2>
                <p>{serviceDetail}</p>
            </div>
        </div>
    );
};

export default Service;
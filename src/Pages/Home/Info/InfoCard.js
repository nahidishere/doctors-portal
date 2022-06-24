import React from 'react';

const InfoCard = ({ info }) => {
    const { img, infoTitle, infoDetail, bgClass } = info;
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl p-2 text-white ${bgClass}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{infoTitle}</h2>
                <p>{infoDetail}</p>
            </div>
        </div>
    );
};

export default InfoCard;
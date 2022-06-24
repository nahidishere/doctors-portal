import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../../assets/icons/clock.svg"
import marker from "../../../assets/icons/marker.svg"
import phone from "../../../assets/icons/phone.svg"

const Info = () => {
    const ourInfo = [
        {
            img: clock,
            infoTitle: "Opening Hours",
            infoDetail: "We provide services 24/7 everyday.",
            bgClass: "bg-gradient-to-r from-secondary to-primary",
            id: 1
        },
        {
            img: marker,
            infoTitle: "Visit our Location",
            infoDetail: "Gobindaganj,Gaibandha,Bangladesh",
            bgClass: "bg-black",
            id: 2
        },
        {
            img: phone,
            infoTitle: "Contact Us Now",
            infoDetail: "+880 1845289449",
            bgClass: "bg-gradient-to-r from-secondary to-primary",
            id: 3
        }
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {
                ourInfo.map(info => <InfoCard info={info} key={info.id} />)
            }
        </div>
    );
};

export default Info;
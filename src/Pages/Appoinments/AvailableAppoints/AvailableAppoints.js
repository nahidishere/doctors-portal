import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Service from '../Service/Service';

const AvailableAppoints = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <section className='my-6'>
            <h2 className="text-3xl text-secondary text-center">Available slots on {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
                {
                    services.map(service => <Service key={service._id} setTreatment={setTreatment} service={service} />)
                }
            </div>
            {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} date={date} />}
        </section>
    );
};

export default AvailableAppoints;
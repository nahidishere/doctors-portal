import { format } from 'date-fns';
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import Service from '../Service/Service';

const AvailableAppoints = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, 'PP');
    const { isLoading, error, data: services, refetch } = useQuery(["available", formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res => res.json())
    )
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formatedDate])
    if (isLoading) {
        return <Loading />
    }
    return (
        <section className='my-6'>
            <h2 className="text-3xl text-secondary text-center">Available slots on {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
                {
                    services?.map(service => <Service key={service._id} setTreatment={setTreatment} service={service} />)
                }
            </div>
            {treatment && <BookingModal treatment={treatment} refetch={refetch} setTreatment={setTreatment} date={date} />}
        </section>
    );
};

export default AvailableAppoints;
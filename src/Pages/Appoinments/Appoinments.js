import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppoinmentsBanner from './AppoinmentsBanner/AppoinmentsBanner';
import AvailableAppoints from './AvailableAppoints/AvailableAppoints';

const Appoinments = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppoinmentsBanner date={date} setDate={setDate} />
            <AvailableAppoints date={date} />
            <Footer />
        </div>
    );
};

export default Appoinments;
import React, { useState } from 'react';
import chair from "../../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppoinmentsBanner = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="Dentis chair" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppoinmentsBanner;
import React from 'react';
import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='flex my-20 justify-center items-center text-white' style={{
            backgroundImage: `url(${appointment})`
        }}>
            <div className="flex-1 hidden lg:block">
                <img src={doctor} alt="Appointment" className="mt-[-100px] max-w-sm rounded-lg shadow-2xl" />
            </div>
            <div className='flex-1 p-3'>
                <h3 className='text-xl text-primary font-bold uppercase'>Appointment</h3>
                <h1 className='text-4xl'>Make an appointment Today.</h1>
                <p className='my-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>GET STARTED</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;
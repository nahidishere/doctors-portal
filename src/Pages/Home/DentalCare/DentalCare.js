import React from 'react';
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const DentalCare = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='treatment' />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​Dental or oral health is concerned with your teeth, gums and mouth. The goal is to prevent complications such as tooth decay (cavities) and gum disease and to maintain the overall health of your mouth.</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;
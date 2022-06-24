import React from 'react';
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen banner bg-no-repeat bg-cover" style={{
            backgroundImage: `url(${bg})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-lg rounded-lg shadow-2xl" alt='Chair' />
                <div>
                    <h1 className="text-5xl font-bold">Your new sime starts here!</h1>
                    <p className="py-6">If you are facing any kind of physical illness then we are here to help you.</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;
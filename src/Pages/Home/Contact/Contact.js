import React from 'react';
import appointment from "../../../assets/images/appointment.png";

const Contact = () => {
    return (
        <section className='flex justify-center mt-10 py-10 bg-cover' style={{
            backgroundImage: `url(${appointment})`
        }}>
            <div className='text-center'>
                <div>
                    <div className='text-center my-4'>
                        <h3 className="text-xl font-bold text-primary">Contact Us</h3>
                        <p className="text-4xl text-white">Stay connected with us</p>
                    </div>
                </div>
                <form>
                    <div className='flex flex-col gap-4 justify-center my-2'>
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
                        <textarea className="textarea textarea-bordered w-full max-w-xs h-28" placeholder="Your Message"></textarea>
                    </div>
                    <button className="btn btn-primary text-white" type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
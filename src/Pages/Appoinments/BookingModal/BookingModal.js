import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { slots } = treatment;
    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-form" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-form" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='flex flex-col gap-3'>
                        <input name="date" type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-lg" />
                        <select name="slot" className='select select-bordered w-full max-w-lg'>
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" placeholder='Full Name' className="input input-bordered w-full max-w-lg" required />
                        <input name="phone" type="text" placeholder='Phone Number' className="input input-bordered w-full max-w-lg" required />
                        <input name="email" type="email" placeholder='Your Email' className="input input-bordered w-full max-w-lg" required />
                        <button type="submit" htmlFor="booking-form" className="btn btn-accent uppercase">submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formatedDate = format(date, 'PP');
    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking = {
            bookingId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }
        fetch("http://localhost:5000/booking", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set ${format(date, 'PP')} at ${slot}`)
                }
                else {
                    toast.error(`Already have and appointment on ${format(date, 'PP')} at ${slot}`)
                }
                refetch();
                setTreatment(null);
            });
    }
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <input type="checkbox" idhtmlFor="booking-form" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlForhtmlFor="booking-form" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='flex flex-col gap-3'>
                        <input name="date" type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-lg" />
                        <select name="slot" className='select select-bordered w-full max-w-lg'>
                            {
                                slots.map(slot => <option key={slot} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name="name" defaultValue={user?.displayName} type="text" placeholder='Full Name' disabled className="input input-bordered w-full max-w-lg" required />
                        <input name="email" defaultValue={user?.email} type="email" placeholder='Your Email' disabled className="input input-bordered w-full max-w-lg" required />
                        <input name="phone" type="text" placeholder='Phone Number' className="input input-bordered w-full max-w-lg" required />
                        <p>{error && <span>{error.message}</span>}</p>
                        <button type="submit" htmlForhtmlFor="booking-form" className="btn btn-accent uppercase">submit</button>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default BookingModal;
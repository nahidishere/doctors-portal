import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        navigate("/");
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                    }
                    return res.json()
                })
                .then(data => setAppointments(data))
        }
    }, [user, navigate])
    return (
        <div>
            <h2>My Appointments: {appointments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <th>{a.date}</th>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;
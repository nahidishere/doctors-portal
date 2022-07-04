import React from 'react';
import { useQuery } from "react-query";
import Loading from '../../Shared/Loading/Loading';
import UserRow from './UserRow/UserRow';

const AllUsers = () => {
    const { isLoading, error, data: users, refetch } = useQuery('users', () => fetch("http://localhost:5000/user", {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2>All users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow key={user._id} user={user} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
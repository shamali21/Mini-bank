import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'


const Users = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/admin/users')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setUsers(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h5>  Name &nbsp;&nbsp; Account &nbsp;&nbsp;&nbsp;  Balance</h5>
                <table>
                    {users.map((usr) => (
                        <tr key={usr._id}>
                            <th>{usr.username}</th>&nbsp; 
                            <th>{usr.account}</th>&nbsp; 
                            <th>${usr.balance}</th>
                        </tr>
                    ))}
                </table>
                <br></br>
                <NavLink to="/admin/users/addUser">Add User</NavLink >
            </div>

        );
    };
};

export default Users; 
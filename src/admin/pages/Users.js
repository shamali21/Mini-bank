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
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    // const USERS=[
    //     {id: 'u1', name: 'Shamali Shinde', account:'123456098765432234',balance:'$48076'},
    //     {id: 'u2', name: 'Micheal Scott', account:'765432345678987654',balance:'$107560'},
    //     {id: 'u3', name: 'Sheldon Cooper', account:'234567898765432165',balance:'$204210'}
    // ];
    //     const mystyle = {
    //         color: "white",
    //         backgroundColor: "#6C3483",
    //         padding: "10px",
    //         fontFamily: "Arial",
    //         align:"centre"
    //       };

    //     return <div><h2 style={mystyle}> Welcome to Salt.Pe</h2>

    //     <UserList items={USERS} />
    // </div>

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
            <h4>        Name  Account   Balance</h4>
            <ul>
         {users.map((usr) => (
          <li key={usr._id }>
          {usr.balance } {usr.username } {usr.account }
          </li>
        ))}
      </ul>
      <NavLink  to="/admin/users/addUser">Add User</NavLink >
</div>
    
        );
    };
};

export default Users; 
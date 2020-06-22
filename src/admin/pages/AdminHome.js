import React,{useEffect, useState}  from 'react';
import axios from 'axios';

const AdminHome = () => {
    const axios = require('axios').default;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    const [balance,setBalance] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const respGlobal = await axios('http://localhost:9000/admin/home/usercount');
          const respRepos = await axios('http://localhost:9000/admin/home/balance');
    
          setUsers(respGlobal.data);
          setBalance(respRepos.data);
        };
    
        fetchData()
    
      }, []);
    
      if (users) {
        console.log(users,balance);
      }
    
    return <div><h2> Welcome to Salt.Pe</h2>
        <h4 >Total users: {users} </h4>

        <h4 >Amount deposited: </h4>
        <ul>    {balance.map((bal) => (
            <li key={bal._id }>
          {bal._id} = ${bal.total } 
          </li>
        ))}
      </ul>
    </div>
}


export default AdminHome; 
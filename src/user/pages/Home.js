import React,{useState,useEffect} from 'react';
import axios from 'axios'

const Home =() =>{
  const username= "Sahil"
  const [user,setUser] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        const url = await axios('http://localhost:9000/user/home/' + username);
  console.log(username)
        setUser(url.data);
      };
  
      fetchData()
  
    }, []);
  
    if (user) {
      console.log(user);
    }
  
    return <div><h2> Welcome to Salt.Pe</h2>
      <ul>    {user.map((usr) => (
            <li key={usr._id }>
            {usr.username}<br></br>
          Account #: {usr.account} <br></br> 
          Balance: {usr.balance}
          </li>
        ))}
      </ul>
    </div>
}

export default Home; 
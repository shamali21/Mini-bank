import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Transcation = () => {

    // const addTransferHandler = event => {
    //     event.preventDefault();
    //     const newTransaction={
    //         id: Math.random().toString(),
    //         text:'Transcation Alert!'
    //     }
    //     console.log(newTransaction)
    // }
    const account= "1534654753423"
    const [transaction,setTranx] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
          const url = await axios('http://localhost:9000/user/transactions/'+ account);
    console.log(url)
          setTranx(url.data);
        };
    
        fetchData()
    
      }, []);
    
      if (transaction) {
        console.log(transaction);
      }
    
      return <div><h2> Welcome to Salt.Pe</h2>
        <ul>    {transaction.map((tranx) => (
              <li key={tranx._id }>
            Account #: {tranx.account} <br></br> 
            Amount: {tranx.amount}<br></br> 
            Credit/Debit: {tranx.type}
            <br></br>  </li>
          ))}
        </ul>
      </div>
  }
    // return (
    //     <form className="transfer" onSubmit={addTransferHandler}>
    //         <input type="text" />
    //         <button type="submit" >Tranfer Amount</button>
    //     </form>
    // );

export default Transcation;
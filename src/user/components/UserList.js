import React from 'react';
import './UserList.css' 
import UserItem from './UserItem';

const UserList = props =>{
    if (props.items.length  === 0) {
        return(
            <div className ="center">
            <h2>No users found.</h2>

            </div>
        );
    }
    return <ul>
        {
            props.items.map(user => {
                return <UserItem 
                key={user.id} 
                name={user.name} 
                account={user.accountNo} />;
            })
        }
    </ul> 
};


export default UserList;

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
    return <ul className="users-list">
        {
            props.items.map(user => {
                return <UserItem 
                key={user._id} 
                name={user.username} 
                account={user.account}
                balance={user.balance} 
                type={user.type}
                />;
                
            })
        }
    </ul> 
};


export default UserList;

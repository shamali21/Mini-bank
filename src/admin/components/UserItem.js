import React from 'react';
import './UserItem.css'

const UserItem = props => {
    return (
        <li className='user-item'>
            <div className='user-item_content'>
                <div className='user-item_content'>
                    <h3>{props.name}</h3>
                    <h3>{props.account}</h3>
                    <h3>{props.balance}</h3>
                </div>
            </div>

        </li>
    )
};


export default UserItem;

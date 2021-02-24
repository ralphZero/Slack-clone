import React from 'react';
import PlaceholderImg from '../../../assets/profile-placeholder.png';
import './UserWrapper.css';

const UserWrapper = () => {
    return (
        <div className='user'>
            <span className='user__name'>ralphZero</span>
            <button className='user__imgbutton'>
                <img src={PlaceholderImg} alt='img'/>
            </button>
        </div>
    );
}

export default UserWrapper;

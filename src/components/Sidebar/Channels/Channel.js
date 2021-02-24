import React from 'react';

const Channel = ({ item }) => {
    return (
        <div className='channel'>
            <span>#</span>
            <span>{item.title}</span>
        </div>
    );
}

export default Channel;
import React from 'react';
import { Link } from 'react-router-dom';

const Channel = ({ item, selected }) => {

    const selectedClass = selected ? 'selected' : '';

    return (
        <Link to={'/room?channel='+item.id} className={'channel ' + selectedClass}>
            <span>#</span>
            <span>{item.title}</span>
        </Link>
    );
}

export default Channel;
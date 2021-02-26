import React from 'react';
import { Link } from 'react-router-dom';

const Channel = ({ item, selected, onClick }) => {

    const selectedClass = selected ? 'selected' : '';

    return (
        <Link onClick={() => onClick()} to={'/room?channel='+item.id} className={'channel ' + selectedClass}>
            <span>#</span>
            <span>{item.title}</span>
        </Link>
    );
}

export default Channel;
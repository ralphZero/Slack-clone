import React from 'react';

const SidebarItem = ({ item }) => {
    return (
        <div className='sidebaritem'>
            { item.icon }
            <span className='sidebaritem__text'>{ item.text }</span>
        </div>
    );
}

export default SidebarItem;

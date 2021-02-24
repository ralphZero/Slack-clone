import React from 'react';
import { SidebarItems } from '../../../data/SidebarItems';
import SidebarItem from './SidebarItem';
import './SidebarItem.css';

const SidebarItemList = () => {

    const list = SidebarItems.map((item) => {
        return (
            <SidebarItem key={item.text} item={item}/>
        );
    })

    return (
        <div className='sidebaritemlist'>
            { list }
        </div>
    );
}

export default SidebarItemList;

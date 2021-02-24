import React from 'react';
import NewMessageButton from './NewMessageBtn/NewMessageButton';
import SidebarItemList from './SidebarItem/SidebarItemList';
import ChannelList from './Channels/ChannelList';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <NewMessageButton />
            <SidebarItemList />
            <ChannelList />
        </div>
    );
}

export default Sidebar;

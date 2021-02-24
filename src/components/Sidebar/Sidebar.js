import React, { useContext } from 'react';
import NewMessageButton from './NewMessageBtn/NewMessageButton';
import SidebarItemList from './SidebarItem/SidebarItemList';
import ChannelList from './Channels/ChannelList';
import { ThemeContext } from '../../context/ThemeContext';

const Sidebar = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;


    return (
        <div style={{backgroundColor: theme.sideColor}} className='sidebar'>
            <NewMessageButton />
            <SidebarItemList />
            <ChannelList />
        </div>
    );
}

export default Sidebar;

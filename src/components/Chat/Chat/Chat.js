import React, { useContext } from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import { ThemeContext } from '../../../context/ThemeContext';

const Chat = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div style={{backgroundColor: theme.chatBackground, color: theme.chatColor}} className='chat'>
            <ChatHeader />
        </div>
    );
}

export default Chat;

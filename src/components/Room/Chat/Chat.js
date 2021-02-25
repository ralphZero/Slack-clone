import React, { useContext } from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import { ThemeContext } from '../../../context/ThemeContext';
import MessageView from './MessageView/MessageView';
import Editor from './Editor/Editor';

const Chat = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div style={{backgroundColor: theme.chatBackground, color: theme.chatColor}} className='chat'>
            <ChatHeader />
            <Container>
                <MessageView />
                <Editor />
            </Container>
        </div>
    );
}

const Container = (props) => {

    const style = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    }

    return (
        <div style={style}>
            { props.children }
        </div>
    )
}

export default Chat;

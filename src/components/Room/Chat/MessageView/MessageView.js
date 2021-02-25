import React from 'react';
import MessageItem from './Message/MessageItem';
import './MessageView.css';

const MessageView = () => {
    return (
        <div className='messageview__container'>
            <MessageItem />
            <MessageItem />
            <MessageItem />
        </div>
    );
}

export default MessageView;

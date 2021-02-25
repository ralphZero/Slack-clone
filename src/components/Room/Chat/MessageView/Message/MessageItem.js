import React from 'react';
import PlaceholderImg from '../../../../../assets/profile-placeholder.png';
import './MessageItem.css';

const MessageItem = () => {
    return (
        <Container>
            <Thumbnail />
            <Items>
                <UsernameTime />
                <Message />
            </Items>
        </Container>
    );
}

const Container = (props) => {
    return (
        <div className="messageitem">
            { props.children }
        </div>
    )
}

const Thumbnail = () => {
    return (
        <div className="messageitem__thumbnailwrapper">
            <img src={PlaceholderImg} alt="thumb"/>
        </div>
    )
}

const Items = (props) => {
    return (
        <div className="messageitem__items">
            { props.children }
        </div>
    )
}

const UsernameTime = () => {
    return (
        <div className="messageitem__usernametimewrapper">
            <span className="messageitem__username">Bob l'eponge</span>
            <span className="messageitem__time">12:30PM</span>
        </div>
    )
}

const Message = () => {
    return (
        <div className="messageitem__message">
            Message
            <div>Message</div>
        </div>
    )
}

export default MessageItem;

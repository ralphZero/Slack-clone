import React from 'react';
import moment from 'moment'
import './MessageItem.css';

const MessageItem = ({ message }) => {
    const date = moment(message.createdAt.toDate()).calendar();

    return (
        <Container>
            <Thumbnail img={message.photoUrl} />
            <Items>
                <UsernameTime name={message.name} createdAt={date}/>
                <Message message={message.message}/>
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

const Thumbnail = ({ img }) => {
    return (
        <div className="messageitem__thumbnailwrapper">
            <img src={img} alt="thumb"/>
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

const UsernameTime = ({ name, createdAt }) => {
    return (
        <div className="messageitem__usernametimewrapper">
            <span className="messageitem__username">{ name }</span>
            <span className="messageitem__time">{ createdAt }</span>
        </div>
    )
}

const Message = ({ message }) => {
    return (
        <div className="messageitem__message">
            { message }
        </div>
    )
}

export default MessageItem;

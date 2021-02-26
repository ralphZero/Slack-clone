import React from 'react';
import MessageItem from './Message/MessageItem';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux'
import './MessageView.css';

const MessageView = (props) => {

    const { messages } = props;

    const messageList = messages && messages.map((message) => {
        return (
            <MessageItem key={message.id} message={message} />
        )
    })

    return (
        <div className='messageview__container'>
            { messageList }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currentId: state.channel.currentId,
        messages: state.firestore.ordered.messages
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        return [
            { 
                collection: 'rooms',
                doc: props.currentId, 
                subcollections: [
                    {
                        collection: 'messages'
                    }
                ],
                storeAs: 'messages'
            }
        ]
    })
)(MessageView);

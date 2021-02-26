import React, { useContext } from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import { ThemeContext } from '../../../context/ThemeContext';
import MessageView from './MessageView/MessageView';
import Editor from './Editor/Editor';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const Chat = (props) => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const { channel } = props;

    if(channel)
    return (
        <div style={{backgroundColor: theme.chatBackground, color: theme.chatColor}} className='chat'>
            <ChatHeader title={channel.title} desc={channel.description} />
            <Container>
                <MessageView />
                <Editor/>
            </Container>
        </div>
    );
    else
    return (
        <div className='chat'></div>
    )
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

const mapStateToProps = (state, props) => {
    let rooms = state.firestore.data.rooms;
    console.log(state);
    return {
        channel: rooms && rooms[props.id]
    }
}

export default compose(
    /* firestoreConnect((props) => {
        return [
            { collection: 'rooms', doc: props.id }
        ]
    }), */
    connect(mapStateToProps)
)(Chat);

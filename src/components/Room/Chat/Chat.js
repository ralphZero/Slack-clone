import React, { useContext } from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import { ThemeContext } from '../../../context/ThemeContext';
import MessageView from './MessageView/MessageView';
import Editor from './Editor/Editor';
import { connect } from 'react-redux';
import { compose } from 'redux';

const Chat = (props) => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const { channel, currentId } = props;

    if(channel && currentId)
    return (
        <div style={{backgroundColor: theme.chatBackground, color: theme.chatColor}} className='chat'>
            <ChatHeader title={channel.title} desc={channel.description} />
            <Container>
                <MessageView room={currentId} />
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
    return {
        channel: rooms && rooms[props.id],
        currentId: state.channel.currentId
    }

}

export default compose(
    connect(mapStateToProps)
)(Chat);

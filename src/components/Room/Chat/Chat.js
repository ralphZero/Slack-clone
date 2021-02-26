import React, { useContext } from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import { ThemeContext } from '../../../context/ThemeContext';
import MessageView from './MessageView/MessageView';
import Editor from './Editor/Editor';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Chat = (props) => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const { channel, currentId, status } = props;

    if(channel && currentId && status)
    return (
        <div style={{backgroundColor: theme.chatBackground, color: theme.chatColor}} className='chat'>
            <ChatHeader title={channel.title} desc={channel.description} />
            <Container>
                <MessageView room={currentId} />
                <Editor/>
            </Container>
        </div>
    );
    else if(status && !channel)
    return (
        <div style={{alignItems: 'center', backgroundColor: 'transparent'}} className="chat">
            <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_rDB3bm.json"
                style={{ height: '300px', width: 'auto' }}
            >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            <h1 style={{color: '#a9a9a9'}}>Channel not found</h1>
        </div>
    )
    else
    return (
        <div className="chat"></div>
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
    let status = state.firestore.status.requested['rooms?orderBy=createdAt:asc'] !== undefined ?  state.firestore.status.requested['rooms?orderBy=createdAt:asc'] : false;
    return {
        channel: rooms && rooms[props.id],
        currentId: state.channel.currentId,
        status: status
    }

}

export default compose(
    connect(mapStateToProps)
)(Chat);

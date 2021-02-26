import React, { useContext } from 'react'
import TopHeader from './TopHeader/Header/TopHeader'
import Sidebar from '../Sidebar/Sidebar'
import Chat from './Chat/Chat';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import LottieData from '../../assets/lf30_editor_rg2qcysp.json';
import { ThemeContext } from '../../context/ThemeContext';

const Room = (props) => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    if (props.auth.isEmpty) return <Redirect to="/" />;

    let query = new URLSearchParams(props.location.search);

    if(props.rooms && !query.has('channel')) return <Redirect to={'/room?channel='+props.rooms[0].id} />

    const show = query.has('channel') ? (
        <Chat id={query.get('channel')} />
    ) : (
            <div style={{alignItems: 'center', backgroundColor: 'transparent'}} className="chat">
                <Player
                    autoplay
                    loop
                    src={LottieData}
                    style={{ height: '300px', width: '300px' }}
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
                <h1 style={{color: '#a9a9a9'}}>Click on + to create a channel</h1>
            </div>
        );

    const style = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    }

    return (
        <div style={style}>
            <TopHeader />
            <div style={{backgroundColor: theme.chatBackground}} className='chatwrapper'>
                <Sidebar {...props} />
                {show}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        rooms: state.firestore.ordered.rooms
    }
}

export default connect(mapStateToProps)(Room)

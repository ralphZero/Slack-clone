import React from 'react';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import './Channel.css';
import Channel from './Channel';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { AddChannel } from '../../../store/actions/ChannelAction';

const ChannelList = (props) => {

    const list = props.rooms && props.rooms.map((room) => {
        return (
            <Channel key={room.id} item={room} />
        );
    });

    const handleAddChannel = () => {
        let channel = prompt("Create a channel");
        if(channel != null) {
            props.addChannel(channel);
        }
    }

    return (
        <div className='channellist'>
            <ChannelTitle onAdd={handleAddChannel} />
            { list }
        </div>
    );
}

const ChannelTitle = ({ onAdd }) => {
    return (
        <div className='channeltitle'>
            <span>Channels</span>
            <AddRoundedIcon onClick={() => onAdd()} />
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        rooms: state.firestore.ordered.rooms
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addChannel: (title) => dispatch(AddChannel(title))
    }
}

export default compose(
    firestoreConnect([{ collection: 'rooms' }]),
    connect(mapStateToProps, mapDispatchToProps)
)(ChannelList);

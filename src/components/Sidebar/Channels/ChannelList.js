import React, { useContext } from 'react';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import './Channel.css';
import Channel from './Channel';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { ModalContext } from '../../../context/ModalContext';

const ChannelList = (props) => {

    const list = props.rooms && props.rooms.map((room) => {
        return (
            <Channel key={room.id} item={room} />
        );
    });

    const { toggleModal } = useContext(ModalContext);

    const handleAddChannel = () => {
        // open the modal
        toggleModal('addChannel');
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

export default compose(
    firestoreConnect([{ collection: 'rooms', orderBy: ['createdAt', 'asc'] }]),
    connect(mapStateToProps)
)(ChannelList);

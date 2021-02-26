import React, { useContext, useEffect } from 'react';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import './Channel.css';
import Channel from './Channel';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { ModalContext } from '../../../context/ModalContext';
import { UpdateCurrentChannel } from '../../../store/actions/ChannelAction';

const ChannelList = (props) => {

    const { rooms, currentId, setCurrent } = props;

    useEffect(() => {
        if(rooms && !currentId) {
            // there is data but none selected
            setCurrent(rooms[0].id);
        }
    }, [rooms, currentId, setCurrent]);

    let query = new URLSearchParams(props.location.search);

    const list = rooms && rooms.map((room) => {
        const isSelected = query.get('channel') === room.id;
        return (
            <Channel key={room.id} item={room} selected={isSelected} onClick={() => setCurrent(room.id)}/>
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
        rooms: state.firestore.ordered.rooms,
        currentId: state.channel.currentId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrent: (id) => dispatch(UpdateCurrentChannel(id))
    }
}

export default compose(
    firestoreConnect([{ collection: 'rooms', orderBy: ['createdAt', 'asc'] }]),
    connect(mapStateToProps, mapDispatchToProps)
)(ChannelList);

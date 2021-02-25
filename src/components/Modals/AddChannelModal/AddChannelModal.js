import React, { useState, useContext } from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import './AddChannelModal.css';
import { AddChannel } from '../../../store/actions/ChannelAction';
import { ModalContext } from '../../../context/ModalContext';

const AddChannelModal = (props) => {
    const [channel, setChannel] = useState({
        title: '',
        desc: ''
    });

    const { toggleModal } = useContext(ModalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        // put in firebase
        props.addChannel(channel);
        // close the modal
        toggleModal('addChannel');
    }

    return (
        <Modal title="Create a channel" tag="addChannel">
            <div className="addchannelmodal">
                <h5>Channels are where your team communicates. They’re best when organized around a topic — #marketing, for example.</h5>
                <form onSubmit={(e) => handleSubmit(e)} className="addchannelmodal__form">
                    <label htmlFor="title">Name:</label>
                    <input type="text" placeholder="E.g. My channel" value={channel.title} onChange={(e) => setChannel({...channel, title: e.target.value})} maxLength="80" name="title"/>
                    <label htmlFor="desc">Description (Optional):</label>
                    <input type="text" placeholder="Describe your channel" value={channel.desc} onChange={(e) => setChannel({...channel, desc: e.target.value})}  name="desc"/>
                    <button type="submit" disabled={channel.title ? false : true}>Create</button>
                </form>
            </div>
        </Modal>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addChannel: (channel) => dispatch(AddChannel(channel))
    }
}

export default connect(null, mapDispatchToProps)(AddChannelModal);

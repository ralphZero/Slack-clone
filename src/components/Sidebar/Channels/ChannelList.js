import React from 'react';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { ChannelItems } from '../../../data/ChannelItems';
import './Channel.css';
import Channel from './Channel';

const ChannelTitle = () => {
    return (
        <div className='channeltitle'>
            <span>Channels</span>
            <AddRoundedIcon />
        </div>
    );
}

const ChannelList = () => {

    const list = ChannelItems.map((item) => {
        return (
            <Channel key={item.id} item={item} />
        );
    });

    return (
        <div className='channellist'>
            <ChannelTitle />
            { list }
        </div>
    );
}

export default ChannelList;

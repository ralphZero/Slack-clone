import React from 'react';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Title from './Title';
import Topic from './Topic';
import './ChatHeader.css';

const TitleGroup = (props) => {
    const style = {
        display: 'flex',
        flexDirection: 'column',
        gap: '3px'
    }
    return (
        <div style={style}>
            { props.children }
        </div>
    )
}

const PeopleGroup = (props) => {
    const style = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '18px',
        color: '#808080'
    }
    return (
        <div style={style}>
            { props.children }
        </div>
    )
}

const ChatHeader = ({ title, desc }) => {
    return (
        <div className='chatheader'>
            <TitleGroup>
                <Title title={title}/>
                <Topic desc={desc} />
            </TitleGroup>
            <PeopleGroup>
                <PersonAddOutlinedIcon />
                <HelpOutlineRoundedIcon />
            </PeopleGroup>
        </div>
    );
}

export default ChatHeader;

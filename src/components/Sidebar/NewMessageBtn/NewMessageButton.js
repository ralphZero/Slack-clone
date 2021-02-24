import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PostAddIcon from '@material-ui/icons/PostAdd';
import './NewMessageButton.css';

const FloatingActionButton = () => {
    return (
        <button className='fab'>
            <PostAddIcon fontSize="small" />
        </button>
    );
}

const NewMessageButton = () => {
    return (
        <div className='newmessagebtn'>
            <span className='newmessagebtn__titlewrapper'>
                <span>UncannyCounter</span>
                <ExpandMoreIcon fontSize="small" />
            </span>
            <FloatingActionButton />
        </div>
    );
}



export default NewMessageButton;
import React from 'react';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';

const Topic = ({ desc }) => {

    const topic = desc.isEmpty ? 'Add topic' : desc;

    return (
        <div className='chatheader__topic'>
            <BookOutlinedIcon style={{fontSize: 14}}/>
            <span>1 |</span>
            <span>{ topic }</span>
        </div>
    );
}

export default Topic;

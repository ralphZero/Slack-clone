import React from 'react';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';

const Topic = () => {
    return (
        <div className='chatheader__topic'>
            <BookOutlinedIcon style={{fontSize: 14}}/>
            <span>1 |</span>
            <span>Add topic</span>
        </div>
    );
}

export default Topic;

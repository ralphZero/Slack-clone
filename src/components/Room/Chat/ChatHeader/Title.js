import React from 'react';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import './ChatHeader.css';

const Title = ({ title }) => {
    return (
        <div className='chatheader__title'>
            #{title}
            <StarOutlineRoundedIcon fontSize="small" color="disabled" />
        </div>
    );
}

export default Title;

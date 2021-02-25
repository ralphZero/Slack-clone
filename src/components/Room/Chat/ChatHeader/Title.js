import React from 'react';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import './ChatHeader.css';

const Title = () => {
    return (
        <div className='chatheader__title'>
            #design
            <StarOutlineRoundedIcon fontSize="small" color="disabled" />
        </div>
    );
}

export default Title;

import React from 'react';
import './SearchWrapper.css';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const SearchWrapper = () => {
    return (
        <div className='search__wrapper'>
            <AccessTimeIcon style={{color: '#ffffffa9'}}/>
            <input className='search__input' type="text" placeholder='Search...'/>
            <HelpOutlineIcon style={{color: '#ffffffa9'}} />
        </div>
    );
}

export default SearchWrapper;

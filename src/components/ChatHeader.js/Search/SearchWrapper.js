import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const SearchWrapper = () => {
    return (
        <div>
            <AccessTimeIcon />
            <input type="text" placeholder='Search...'/>
        </div>
    );
}

export default SearchWrapper;

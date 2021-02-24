import React from 'react';
import style from './TopHeader.module.css';
import SearchWrapper from '../Search/SearchWrapper';
import UserWrapper from '../User/UserWrapper';

const TopHeader = () => {
    return (
        <header className={style.container}>
            <div style={{width: '32px'}}></div>
            <SearchWrapper />
            <UserWrapper />
        </header>
    );
}

export default TopHeader;

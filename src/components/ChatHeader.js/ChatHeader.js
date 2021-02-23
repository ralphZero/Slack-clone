import React from 'react';
import style from './ChatHeader.module.css';
import SearchWrapper from './Search/SearchWrapper';
import UserWrapper from './User/UserWrapper';

const ChatHeader = () => {
    return (
        <header className={style.container}>
            <div></div>
            <SearchWrapper />
            <UserWrapper />
        </header>
    );
}

export default ChatHeader;

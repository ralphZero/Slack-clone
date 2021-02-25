import React, { useContext } from 'react';
import style from './TopHeader.module.css';

import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';

import SearchWrapper from '../Search/SearchWrapper';
import UserWrapper from '../User/UserWrapper';
import { ThemeContext } from '../../../../context/ThemeContext';

const TopHeader = () => {

    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const toggle = isLightTheme ? (<Brightness4OutlinedIcon onClick={() => handleThemeToggle()} style={{fontSize: 32, color: '#a9a9a9'}} />) : (<Brightness7Icon onClick={() => handleThemeToggle()} style={{fontSize: 32, color: '#f8f8f8'}} />);

    const handleThemeToggle = () => {
        toggleTheme();
    }

    return (
        <header style={{backgroundColor: theme.headerColor}} className={style.container}>
            { toggle }
            <SearchWrapper />
            <UserWrapper />
        </header>
    );
}

export default TopHeader;

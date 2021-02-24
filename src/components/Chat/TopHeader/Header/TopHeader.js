import React, { useContext } from 'react';
import style from './TopHeader.module.css';
import ToggleOffOutlinedIcon from '@material-ui/icons/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@material-ui/icons/ToggleOnOutlined';
import SearchWrapper from '../Search/SearchWrapper';
import UserWrapper from '../User/UserWrapper';
import { ThemeContext } from '../../../../context/ThemeContext';

const TopHeader = () => {

    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const toggle = isLightTheme ? (<ToggleOffOutlinedIcon onClick={() => handleThemeToggle()} style={{fontSize: 32, color: '#a9a9a9'}} />) : (<ToggleOnOutlinedIcon onClick={() => handleThemeToggle()} style={{fontSize: 32, color: '#f8f8f8'}} />);

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

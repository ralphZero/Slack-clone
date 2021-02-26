import React, { useContext } from 'react';
import style from './TopHeader.module.css';
import Logo from '../../../../assets/Slack_Mark.svg';
import SearchWrapper from '../Search/SearchWrapper';
import UserWrapper from '../User/UserWrapper';
import { ThemeContext } from '../../../../context/ThemeContext';

const TopHeader = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <header style={{backgroundColor: theme.headerColor}} className={style.container}>
            <SlackLogo logo={Logo}/>
            <SearchWrapper />
            <UserWrapper />
        </header>
    );
}

const SlackLogo = ({ logo }) => {
    return (
        <div style={{height: '32px'}}>
            <img style={{height: '32px', transform: 'scale(1.5)'}} src={logo} alt="Logo"/>
        </div>
    )
}

export default TopHeader;

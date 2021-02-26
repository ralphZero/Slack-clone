import React, { useContext } from 'react';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import './UserWrapper.css';
import { connect } from 'react-redux';
import { ThemeContext } from '../../../../context/ThemeContext';
import { SignOut } from '../../../../store/actions/AuthActions';

const UserWrapper = (props) => {

    const { profile, logout } = props;

    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const toggle = isLightTheme ? (
        <span>Dark theme</span>
    ) : (
        <span>Light theme</span>
    );

    const handleThemeSwitch = (e) => {
        toggleTheme();
    }

    const handleLogout = (e) => {
        logout();
    }

    return (
        <div className="userwrapper">
            <div className='user'>
                <span className='user__name'>{profile.name}</span>
                <button className='user__imgbutton'>
                    <img src={profile.photoURL} alt='img' />
                </button>
            </div>
            <div className="user__dropdownmenu">
                <ul style={{backgroundColor: theme.chatBackground, color: theme.chatColor}}>
                    <li>
                        <PersonOutlineOutlinedIcon />
                        <span>Account</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon />
                        <span>Preferences</span>
                    </li>
                    <li onClick={(e) => handleThemeSwitch(e)}>
                        <Brightness4OutlinedIcon />
                        { toggle }
                    </li>
                    <li onClick={(e) => handleLogout(e)}>
                        <ExitToAppOutlinedIcon />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(SignOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserWrapper);

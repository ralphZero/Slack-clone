import React from 'react';
import './Splashscreen.css';
import Logo from '../../assets/Slack_Mark.svg';

const Splashscreen = () => {
    return (
        <div className="splashscreen">
            <img className="splashscreen__logo" src={Logo} alt="Logo"/>
        </div>
    );
}

export default Splashscreen;

import React from 'react';
import './Login.css';
import Logo from '../../assets/Slack_RGB_White.svg';
import GoogleButton from '../../assets/btn_google_signin_light_normal_web.png';
import { connect } from 'react-redux';

const Login = () => {
    return (
        <div className="login__container">
            <div className="login__card">
                <div className="login__body">
                    <div className="login__imgwrapper">
                        <img src={Logo} alt="logo" />
                    </div>
                    <h3>Welcome to Slack Clone</h3>
                    <p>Slack gives your team a home — a place where they can talk and work together. To continue, click the button below.</p>
                    <button className="login__body-google">
                        <img src={GoogleButton} alt="Login with Google" />
                    </button>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(null, mapDispatchToProps)(Login);

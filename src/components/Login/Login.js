import React from 'react';
import './Login.css';
import Logo from '../../assets/Slack_RGB_White.svg';
import GoogleButton from '../../assets/btn_google_signin_light_normal_web.png';
import { connect } from 'react-redux';
import { LoginWithGoogle } from '../../store/actions/AuthActions';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    const { login, auth } = props;

    if(!auth.isEmpty) return <Redirect to='/room' />;

    return (
        <div className="login__container">
            <div className="login__card">
                <div className="login__body">
                    <div className="login__imgwrapper">
                        <img src={Logo} alt="logo" />
                    </div>
                    <h3>Welcome to Slack Clone</h3>
                    <p>Slack gives your team a home — a place where they can talk and work together. To continue, click the button below.</p>
                    <button className="login__body-google" onClick={() => login()}>
                        <img src={GoogleButton} alt="Login with Google" />
                    </button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(LoginWithGoogle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

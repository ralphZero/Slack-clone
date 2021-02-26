import React from 'react';
import './UserWrapper.css';
import { connect } from 'react-redux';

const UserWrapper = (props) => {

    const { profile } = props;

    return (
        <div className='user'>
            <span className='user__name'>{profile.name}</span>
            <button className='user__imgbutton'>
                <img src={profile.photoURL} alt='img'/>
            </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(UserWrapper);

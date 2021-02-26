import React from 'react'
import TopHeader from './TopHeader/Header/TopHeader'
import Sidebar from '../Sidebar/Sidebar'
import Chat from './Chat/Chat'

const Room = (props) => {
    let query = new URLSearchParams(props.location.search);

    const show = query.has('channel') ? (
        <Chat id={query.get('channel')}/>
    ) : (
        <div className="chat">Nothing</div>
    );

    const style = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    }
    return (
        <div style={style}>
            <TopHeader />
            <div className='chatwrapper'>
                <Sidebar {...props}/>
                { show }
            </div>
        </div>
    )
}
export default Room

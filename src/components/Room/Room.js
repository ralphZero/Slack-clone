import React from 'react'
import TopHeader from './TopHeader/Header/TopHeader'
import Sidebar from '../Sidebar/Sidebar'
import Chat from './Chat/Chat'

const Room = () => {
    const style = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    }
    return (
        <div style={style}>
            <TopHeader />
            <div className='chatwrapper'>
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}
export default Room
